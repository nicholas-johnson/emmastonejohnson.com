const path = require("path");
const contentful = require("contentful");
const download = require('image-downloader');
const fs = require('fs');

const filePath = path.join(__dirname, "../public/content.json");
const client = contentful.createClient({
    space: "id3oixfnm9vo",
    accessToken: "w0--AEFU_m_hjgfzOa154dJQ4w_GX6KBh3gv_dQd24E"
});

const downloadImages = (data) => {
    const paintings = data
        .items
        .filter(
            item => item.sys.contentType.sys.id === 'painting'
        )
        .map(
            painting => ({
                url: `${painting.fields.image?.fields.file.url}?w=600`, 
                slug: painting.fields.permalink
            })
        )
        .filter(({url}) => url)
        .map(painting => (
            {
                ...painting, 
                url: `https:${painting.url}`,
            }
        ))

    console.log('downloading images', { paintings })

    return Promise.all(
        paintings.map(
            ({slug, url}) => download.image({
                url,
                dest: `${__dirname}/../public/paintings`
            })
                .then(({ filename }) => {
                    const oldPath = filename;                    
                    const newPath = `${__dirname}/../public/paintings/${slug}.jpg`
                    console.log({oldPath, newPath})                 
                    fs.renameSync( oldPath, newPath, () => {
                        console.log('Saved to', newPath)
                    });  
                })
                .catch((err) => console.error(err))
        )
    );
}

client
    .getEntries()
    .then(data => {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return data;
    })
    .then(data => {
        downloadImages(data)
    })
    .catch(err => console.log(err));

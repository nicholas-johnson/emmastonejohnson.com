const path = require("path");
const fs = require("fs");
const contentful = require("contentful");

const download = require('image-downloader')

const filePath = path.join(__dirname, "../public/content.json");
const client = contentful.createClient({
    space: "id3oixfnm9vo",
    accessToken: "w0--AEFU_m_hjgfzOa154dJQ4w_GX6KBh3gv_dQd24E"
});

const downloadImages = (data) => {
    const urls = data
        .items
        .filter(
            item => item.sys.contentType.sys.id === 'painting'
        )
        .map(
            painting => painting.fields.image?.fields.file.url
        )
        .filter(url => url)
        .map(url => `https:${url}`)
    console.log('downloading images', { urls })

    return Promise.all(
        urls.map(
            url => download.image({
                url,
                dest: `${__dirname}/../public/paintings`
            })
                .then(({ filename }) => {
                    console.log('Saved to', filename)
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

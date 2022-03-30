const path = require("path");
const fs = require("fs");
const contentful = require("contentful");
const instagram_download = require('@juliendu11/instagram-downloader');

const filePath = path.join(__dirname, "../public/content.json");
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "id3oixfnm9vo",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "w0--AEFU_m_hjgfzOa154dJQ4w_GX6KBh3gv_dQd24E"
});

const downloadImages = (data) => {
    const urls = data.items.filter(item => item.sys.contentType.sys.id === 'painting').map(painting => painting.fields.instagram)
    console.log({ urls })
    return Promise.all(
        urls.map(
            url => instagram_download.downloadImages()//.downloadMedia(url, './public/instagram')
        )
    );
}

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
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
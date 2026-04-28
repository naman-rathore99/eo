const fs = require('fs');

async function download() {
    const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzllMWUxZjVlNDExZTQxNWViNGQ4MTY5NTQ0NWZjZGZlEgsSBxCEkouu_wcYAZIBIwoKcHJvamVjdF9pZBIVQhM5MDk5NDU1NjE1Nzg2MDIxNDAy&filename=&opi=89354086";
    const res = await fetch(url);
    const text = await res.text();
    fs.writeFileSync('stitch_website_seo.html', text);
    console.log("Downloaded " + text.length + " bytes");
}
download();

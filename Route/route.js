const express = require("express");
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
router.get("/getTimeStories", async (req, res) => {
    //all of the parsed data object
    var obj = [];

    //array of the 5 stories
    let timeData = {};
    let arr1 = {};
    let arr2 = {};

    var requ = new XMLHttpRequest();
    requ.open('GET', 'https://time.com/', false);
    requ.send(null);
    if (requ.status == 200)
        tex = requ.responseText;
    sub = tex.substring(tex.indexOf("Latest Stories"), tex.indexOf("Featured Voices"));

    r = sub.split("<h2 class=\"title\"><a href=");
    for (i = 1; i < r.length; i++) {
        timeData[i] = r[i].substring(0, r[i].indexOf("</a></h2>"));
        arr1[i] = timeData[i].substring(0, timeData[i].indexOf(">"));
        arr2[i] = timeData[i].substring(timeData[i].indexOf(">") + 1);
        obj.push({ title: arr2[i], link: "https://time.com" + arr1[i] });
    }
    res.json(obj);
})
module.exports = router;
var express = require('express');
var router = express.Router();
var ogs = require("open-graph-scraper");

/* GET home page. */
router.get('/ogp1', async function(req, res, next) {
  const option = { url: "https://comic.naver.com/webtoon/detail?titleId=183559&no=536&weekday=mon" };
  const data = await ogs(option);
  console.log(data.result);
    
  res.json(data.result);
});

/* GET home page. */
router.get('/ogp2', async function(req, res, next) {
  const option = { url: "https://www.youtube.com/watch?v=cQKcBKNVHhw" };
  const data = await ogs(option);
  console.log(data.result);
    
  res.json(data.result);
});


module.exports = router;
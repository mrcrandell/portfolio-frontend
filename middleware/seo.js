module.exports = function (req, res, next) {
  let urlParts = req.url.split('/')
  urlParts = urlParts.filter((part) => part !== '')
  if (
    urlParts.length === 2 &&
    urlParts[0] === 'blog' &&
    urlParts[1] !== 'page'
  ) {
    res.writeHead(301, { Location: `/blog/category/${urlParts[1]}` })
    res.end()
  } else {
    next()
  }
}

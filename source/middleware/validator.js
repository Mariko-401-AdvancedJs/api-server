function checkInfo(req, res, next) {
  console.log('validator?:', req.params.id)
  if (req.params.id) {
    next();
  } else {
    next('500')
  }
}
module.exports = checkInfo;
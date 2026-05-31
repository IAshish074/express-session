exports.checkAdmin = (req, res, next) => {
    
  if (!req.session.user || req.session.user.role !== "admin") {
    return res.redirect("/auth/login")
  }
  next()
}

exports.checkUser = (req, res, next) => {
    console.log(req.session.user)
  if (!req.session.user || req.session.user.role !== "user") {
    return res.redirect("/auth/login")
  }
  next()
}

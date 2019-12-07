module.exports = function (req, res, next) {
  if (typeof count === undefined) {
    let count = 0
  }
  if (count < 6) {
    next
  } else {
    res.status(429).send({ message: "You made more than 5 requests!" })
  }
}
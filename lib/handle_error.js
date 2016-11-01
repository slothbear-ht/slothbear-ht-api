module.exports = function(err, status, message, res) {
  console.log(err);
  res.status(status).json({ msg: message });
};

const jwt = require('jsonwebtoken')
const secrets = require('../secrets.js')


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken)=>{
      if (err){
        res.status(401).json({ message: 'wrong token' });
      }else {
        req.user = { roles: decodeToken.roles, username: decodeToken.username }
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'Please Login' });
  }
};

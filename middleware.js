const jwt = require('jsonwebtoken')
const secret = 'supersecret'
const routeFilter = (req, res, next)=>{
   
   //checking and verifying the token
   var token = req.header("token");
   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

   jwt.verify(token, secret, (err,decoded)=>{
      if (err) return res.status(500).send({
          auth: false, message: 'Failed to authenticate token.' 
      }); 
      else{
         next();
      }
   });
}

module.exports = routeFilter
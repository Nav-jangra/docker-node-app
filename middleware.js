const routeFilter = (req, res, next)=>{
     if(!req.query.age){
        res.send("Please provide your age")
     }
     else if(req.query.age <18){
        res.send("you are under age")
     }
     else{
        next();
     }
}

module.exports = routeFilter
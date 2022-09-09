'use strict';

function squareTheNum(req, res, next) {
    
    console.log('inside mow');
    const {num} = req.query ;
    console.log(req.query,'after query call');
    const rgx = /\b[0-9][0-9]*\b/g;
    
    const strNum = num.match(rgx);
    console.log(strNum);

    if(strNum!=0) {
        let number = parseInt(strNum[0]);
        console.log(number);
        req.squared = number*number;
        console.log(req.squared);
        next();
    } else {        
        next(`num must be a number value only`);
        //go to a middleware with error arg

    }
  
}


module.exports = { squareTheNum };
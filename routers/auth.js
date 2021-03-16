const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        let err = new Error('No authentication information');
        err.status = 401;
        return next(err);
    }
    let token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if (err) return next(err);
        req.user = payload;
        next();
    })
}

const verifyUser = (req, res, next) => {
    if (!req.user) {
        let err = new Error('No authentication information');
        err.status = 401;
        return next(err);
    } else if (req.user.role !== 'user') {
        let err = new Error('Forbidden!');
        err.status = 403;
        return next(err);
    }
    
    next();
}


const verifyCharity = (req, res, next) => {
    if (!req.user) {
        let err = new Error('No authentication information');
        err.status = 401;
        return next(err);
    } else if (req.user.role !== 'charity') {
        let err = new Error('Forbidden!');
        err.status = 403;
        return next(err);
    }

    next();
}


module.exports = {
    verifyAuth,
    verifyCharity,
    verifyUser
};
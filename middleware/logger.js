
const logger = (req, res, next) => {
    console.log('\n new request at  ->     ' +  `${req.protocol}://${req.get("host")}${req.originalUrl}\n`);
    next();
}



module.exports = logger;

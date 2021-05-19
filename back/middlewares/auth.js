const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let userId;
        if (req.query.userId) {
            userId = parseInt(req.query.userId);
        } else {
            userId = parseInt(req.body.userId);
        }

        const cookie = req.cookies['access_token'];
        const decodedToken = jwt.verify(cookie, process.env.RANDOM_TOKEN);
        const tokenUserId = decodedToken.id;

        console.log(userId, tokenUserId);

        if (userId === tokenUserId) {
            next();
        } else {
            console.log("erreur");
            res.status(401).json({
                error: new Error('Une authentification est nécessaire!')
            });
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};

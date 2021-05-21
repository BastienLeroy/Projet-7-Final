const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let userId;

        /**
         * Si "req.query" (paramètre URL) contient une clé "userId" alors on enregistre la valeur dans la variable "userId".
         * Sinon on récupère cette valeur dans "req.body".
         */
        if (req.query.userId) {
            userId = parseInt(req.query.userId); // On assure que le type est bien "Number"
        } else {
            userId = parseInt(req.body.userId); // On assure que le type est bien "Number"
        }

        const cookie = req.cookies['access_token']; // On récupère le cookie "access_token" transmis par la requête du front.
        const decodedToken = jwt.verify(cookie, process.env.RANDOM_TOKEN); // On le décode.
        const tokenUserId = decodedToken.id; // On récupère l'id de l'objet "decodedToken".

        /**
         * Si l'id transmis par le front (paramètre URL) correspond à l'id récupéré du cookie 
         * alors on autorise la requête à poursuivre sa route.
         * Sinon on retourne un code erreur "401".
         */
        if (userId === tokenUserId) {
            next();
        } else {
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

import JWT from "../utils/jwt.js"

export default (req, res, next) => {
    try {
        const { token } = req.headers;
    
        if (!token) {
            return throwError(res, 401, "No token provided");
        }

        const { userId, agent } = JWT.verify(token);

        const reqAgent = req.headers['user-agent'];

        if (agent !== reqAgent) {
            return throwError(res, 401, "Invalid token");
        }
        
        req.userId = userId;

        return next();
    } catch (error) {
        return throwError(res, 401, "Invalid token");
    }
}
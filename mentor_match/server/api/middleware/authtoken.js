// authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT token
const authenticateToken = (req, res, next) => {
  // Extract token from request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  // Return 401 Unauthorized if token is not provided
  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request object
    next(); // Proceed to next middleware
  } catch (error) {
    // Return 403 Forbidden if token is invalid
    return res.status(403).json({ message: 'Invalid authentication token.' });
  }
};

module.exports = { authenticateToken };

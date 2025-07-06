import jwt from 'jsonwebtoken';

export const validateToken = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const supabase_jwt = process.env.SUPABASE_JWT;

    const decoded = jwt.verify(accessToken, supabase_jwt); 

    return res.status(200).json({ valid: true, data: decoded });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ valid: false, error: "Access token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ valid: false, error: "Invalid token" });
    }

    console.error("Unexpected token validation error:", error);
    return res.status(500).json({ valid: false, error: "Internal server error" });
  }
};

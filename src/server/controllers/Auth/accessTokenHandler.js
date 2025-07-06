import jwt from "jsonwebtoken";

export const refreshTokenHandler = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) return res.status(401).json({ error: "No refresh token" });

  try {
    const decoded = jwt.verify(token, process.env.SUPABASE_JWT); // use the same secret
    const userId = decoded.sub;

    // Issue new access token
    const newAccessToken = jwt.sign(
      { sub: userId },
      process.env.SUPABASE_JWT,
      { expiresIn: "15m" }
    );

    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(403).json({ error: "Invalid refresh token" });
  }
};

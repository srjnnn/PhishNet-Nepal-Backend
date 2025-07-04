import supabase from "../../../supabase/index.js";

export const handleLogin = async(req, res)=>{
    try{
        console.log("received body request")

        const {email, password} =req.body

        // validate payload
        if(!email || !password){
            return res.status(400).json({error : "Email and password are required"});
        }
        // authenticate user 

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email : email.trim(),
      password : password.trim(),
    });
if (authError) {
  console.error("Authentication error:", authError.message);
  return res.status(401).json({ error: "Invalid credentials" });
}

const { session, user } = authData;

if (!session || !user) {
  return res.status(401).json({ error: "Authentication failed" });
}

// Everything is fine – send success response
console.log("Authenticated successfully:", user.email);

return res.status(200).json({
  message: "Login successful",
  accessToken: session.access_token,
  refreshToken: session.refresh_token,
  user,
});


    }catch(err){
    console.error("Server error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
    }
}
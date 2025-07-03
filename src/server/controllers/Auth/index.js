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

    // Extract session details
    const { session } = authData;
    if (!session) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const userId = authData.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "User authentication failed" });
    }
    if(!authError & authData){
         return res.status(200).json(authData);
    }



    }catch(err){
    console.error("Server error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
    }
}
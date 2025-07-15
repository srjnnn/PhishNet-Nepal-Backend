import supabase from "../../../supabase/index.js";

export const addUsers = async (req, res) => {
  try {
    const { email, name,contact } = req.body;

    if (!email || !name || !contact) {
      return res.status(400).json({ success: false, message: "User details cannot be null" });
    }

    const { data, error } = await supabase
      .from('clients')
      .insert([{ email, name,contact}])
      .select();

    if (error) throw error;

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error adding user:", error.message);
    return res.status(500).json({ success: false, message: "Failed to add user" });
  }
};

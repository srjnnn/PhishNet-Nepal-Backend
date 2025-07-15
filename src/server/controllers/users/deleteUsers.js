import supabase from "../../../supabase/index.js";

export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "User id is required" });
    }

    const { data, error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id)
      .select();

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    return res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};

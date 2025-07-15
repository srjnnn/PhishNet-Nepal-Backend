
import supabase from "../../../supabase/index.js";

export const editUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, contact } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "User id is required" });
    }
    if (!email && !name && !contact) {
      return res.status(400).json({ success: false, message: "At least one field (email, name, contact) must be provided to update" });
    }

    const updateFields = {};
    if (email) updateFields.email = email;
    if (name) updateFields.name = name;
    if (contact) updateFields.contact = contact;

    const { data, error } = await supabase
      .from('clients')
      .update(updateFields)
      .eq('id', id)
      .select();

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, message: "User not found or no changes made" });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error editing user:", error.message);
    return res.status(500).json({ success: false, message: "Failed to edit user" });
  }
};

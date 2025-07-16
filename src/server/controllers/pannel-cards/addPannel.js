import supabase from "../../../supabase/index.js";

export const addPannel = async (req, res) => {
  try {
    const { heading, platform, link } = req.body;

    if (!heading || !platform || !link) {
      return res.status(400).json({ success: false, message: "Title and description are required" });
    }

    const { data, error } = await supabase
      .from('pannel')
      .insert([{ heading, platform, link }])
      .select();

    if (error) throw error;

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error adding pannel card:", error.message);
    return res.status(500).json({ success: false, message: "Failed to add pannel card" });
  }
};

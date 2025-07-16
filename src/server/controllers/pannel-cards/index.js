import supabase from "../../../supabase/index.js";

export const getPannel = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('pannel')
      .select('*');

    if (error) throw error;

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching pannel cards:", error.message);
    return res.status(500).json({ success: false, message: "Failed to fetch pannel cards" });
  }
};

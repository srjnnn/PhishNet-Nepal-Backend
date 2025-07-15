import supabase from "../../../supabase/index.js";

export const getLogs = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('attempts-logs')
      .select('*');

    if (error) throw error;

    return res.status(200).json({ success: true, data:data });
  } catch (error) {
    console.error("Error fetching Logs:", error.message);
    return res.status(500).json({ success: false, message: "Failed to fetch Logs" });
  }
};

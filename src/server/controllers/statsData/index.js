import supabase from "../../../supabase/index.js";

function getLastNDaysLabels(n) {
  const labels = [];
  const today = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    labels.push(d.toLocaleString('en-US', { month: 'short', day: 'numeric' }));
  }
  return labels;
}

function getRandomValues(n, min = 1, max = 10) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}


export const getStatsData = async (req, res) => {
  try {
    // Generate new labels and values
    const labels = getLastNDaysLabels(10);
    const values = getRandomValues(15);

    // Prepare the JSON object for the 'data' column
    const statsJson = { labels, values };

    // Update the statsData table (assuming a single row with id=1)
    const { error: updateError } = await supabase
      .from('statsData')
      .update({ data: statsJson })
      .eq('id', 1);

    if (updateError) throw updateError;

    // Fetch the updated data
    const { data, error } = await supabase
      .from('statsData')
      .select('*');

    if (error) throw error;

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching statsData:", error.message);
    return res.status(500).json({ success: false, message: "Failed to fetch statsData" });
  }
};

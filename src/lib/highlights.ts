export const inferDayHighlights = (item: { title: string; description: string; meals?: string }) => {
  const chips: string[] = [];
  const text = `${item.title} ${item.description}`.toLowerCase();
  
  if (text.includes("private guide") || text.includes("expert guide")) chips.push("Private Guide");
  if (text.includes("sunset")) chips.push("Sunset View");
  if (text.includes("transfer") || text.includes("pickup") || text.includes("private driver")) chips.push("Transfer");
  if (text.includes("luxury") || text.includes("vip")) chips.push("Premium Access");
  if (item.meals?.toLowerCase().includes("lunch")) chips.push("Lunch Included");
  if (item.meals?.toLowerCase().includes("dinner")) chips.push("Dinner Included");
  
  return chips.slice(0, 3);
};

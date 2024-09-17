export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = newDate.toLocaleString("default", { month: "short" });
  const year = newDate.getFullYear();

  const hours = newDate.getHours();

  return `${day},${month},${year} ${hours}:${newDate.getMinutes()}`;
};

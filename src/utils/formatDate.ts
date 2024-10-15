export const formatDate = (date: string, time?: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = newDate.toLocaleString("default", { month: "short" });
  const year = newDate.getFullYear();

  const hours = newDate.getHours();

  if (time) {
    return `${day},${month},${year} ${hours}:${newDate.getMinutes()}`;
  }
  return `${day},${month},${year}`;
};

export const getTodayStart = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to midnight
  return today;
};
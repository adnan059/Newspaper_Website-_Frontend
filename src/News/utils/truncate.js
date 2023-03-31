export const truncate = (txt, num) => {
  const newTxt = txt.length > num ? txt.slice(0, num) + "..." : txt;
  return newTxt;
};

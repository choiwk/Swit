export const shortening = (param: string) => {
  const length = 10;
  let temp = param;
  if (temp.length > length) {
    temp = temp.slice(0, length) + '...';
  }
  return temp;
};

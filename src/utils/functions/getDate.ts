export const getDate = (date: Date): string => {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : Number('0' + month.toString());
  day = day >= 10 ? day : Number('0' + day.toString());
  hour = hour >= 10 ? hour : Number('0' + hour.toString());
  minute = minute >= 10 ? minute : Number('0' + minute.toString());
  second = second >= 10 ? second : Number('0' + second.toString());

  return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
};

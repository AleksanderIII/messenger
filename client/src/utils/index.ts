const extractDayFromDate = (timeStamp: Date) => {
  return timeStamp.toLocaleDateString([], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const extractTimeFromDate = (timeStamp: Date) => {
  return timeStamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

const checkDateDifference = (timeStamp1: Date, timeStamp2: Date) => {
  return timeStamp1.getDate() !== timeStamp2.getDate();
};

export { extractDayFromDate, extractTimeFromDate, checkDateDifference };

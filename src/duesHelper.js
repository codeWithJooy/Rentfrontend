export const calculateTotalDues = (dues, collections) => {
  let totalDues = 0;
  let totalCollection = 0;

  for (let i = 0; i < dues.length; i++) {
    totalDues = totalDues + parseInt(dues[i].due);
  }
  for (let i = 0; i < collections.length; i++) {
    totalCollection = totalCollection + parseInt(collections[i].amount);
  }
  return {
    due: totalDues - totalCollection,
    collection: totalCollection,
  };
};

export const calculateSingleDue = (type, due, collection) => {
  let totalCol = 0;
  let col = collection.map((data) => {
    if (data.type == type) {
      totalCol = totalCol + parseInt(data.amount);
    }
  });
  return parseInt(due) - totalCol;
};

export const calculateDayDifference = (date1) => {
  let dueDate = new Date(date1).getTime();
  let presentDate = new Date().getTime();
  return Math.floor((dueDate - presentDate) / (1000 * 3600 * 24));
};

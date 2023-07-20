export const calculateTotalDues = (dues, collections, discounts) => {
  let totalDues = 0;
  let totalCollection = 0;
  let totalDiscount = 0;
  for (let i = 0; i < dues.length; i++) {
    totalDues =
      totalDues + parseInt(dues[i].due) - parseInt(dues[i].collection);
  }
  for (let i = 0; i < collections.length; i++) {
    totalCollection = totalCollection + parseInt(collections[i].amount);
  }
  for (let i = 0; i < discounts.length; i++) {
    totalDiscount = totalDiscount + parseInt(discounts[i].amount);
  }
  let sdIndex = dues.findIndex((val) => val.type == "Security Deposit");

  return {
    due: totalDues,
    collection: totalCollection,
    discount: totalDiscount,
    sd: dues[sdIndex].collection,
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

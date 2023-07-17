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

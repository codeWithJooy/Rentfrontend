import moment from "moment";
export const roomAddHelper = (floorName, roomTypes) => {
  const arr = [];
  let counter = 1;
  if (roomTypes.single !== "") {
    if (floorName === "Ground Floor") {
      for (let i = 1; i <= parseInt(roomTypes.single); i++) {
        let room = {};
        room.floor = "Ground Floor";
        room.name = "Ground" + counter;
        room.status = "Vacant";
        room.type = "Single";
        room.rate = 0;
        counter = counter + 1;
        arr.push(room);
      }
    } else {
      for (let i = 1; i <= parseInt(roomTypes.single); i++) {
        let floorNumber = floorName.split(" ")[1];
        let room = {};
        room.floor = floorName;
        room.name = floorNumber * 100 + counter;
        room.status = "Vacant";
        room.type = "Single";
        room.rate = 0;
        arr.push(room);
        counter = counter + 1;
      }
    }
  }
  if (roomTypes.double !== "") {
    if (floorName === "Ground Floor") {
      for (let i = 1; i <= parseInt(roomTypes.double); i++) {
        let room = {};
        room.floor = "Ground Floor";
        room.name = "Ground" + counter;
        room.status = "Vacant";
        room.type = "Double";
        room.rate = 0;
        arr.push(room);
        counter = counter + 1;
      }
    } else {
      for (let i = 1; i <= parseInt(roomTypes.double); i++) {
        let floorNumber = floorName.split(" ")[1];
        let room = {};
        room.floor = floorName;
        room.name = floorNumber * 100 + counter;
        room.status = "Vacant";
        room.type = "Double";
        room.rate = 0;
        arr.push(room);
        counter = counter + 1;
      }
    }
  }
  if (roomTypes.triple !== "") {
    if (floorName === "Ground Floor") {
      for (let i = 1; i <= parseInt(roomTypes.triple); i++) {
        let room = {};
        room.floor = "Ground Floor";
        room.name = "Ground" + counter;
        room.status = "Vacant";
        room.type = "Triple";
        room.rate = 0;
        arr.push(room);
        counter = counter + 1;
      }
    } else {
      for (let i = 1; i <= parseInt(roomTypes.triple); i++) {
        let floorNumber = floorName.split(" ")[1];
        let room = {};
        room.floor = floorName;
        room.name = floorNumber * 100 + counter;
        room.status = "Vacant";
        room.type = "Triple";
        room.rate = 0;
        arr.push(room);
        counter = counter + 1;
      }
    }
  }
  return arr;
};
export const monthName = (number) => {
  const months = [
    { name: "Jan", days: 31 },
    { name: "Feb", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "Jun", days: 30 },
    { name: "July", days: 31 },
    { name: "Aug", days: 31 },
    { name: "Sep", days: 30 },
    { name: "Oct", days: 31 },
    { name: "Nov", days: 30 },
    { name: "Dec", days: 31 },
  ];
  return months[number];
};
export const monthNameByDate = (date) => {
  const months = [
    { name: "Jan", days: 31 },
    { name: "Feb", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "Jun", days: 30 },
    { name: "July", days: 31 },
    { name: "Aug", days: 31 },
    { name: "Sep", days: 30 },
    { name: "Oct", days: 31 },
    { name: "Nov", days: 30 },
    { name: "Dec", days: 31 },
  ];
  const newDate = new Date(date);
  let present_month = newDate.getMonth();
  return months[present_month];
};
export const calculateDue = (rent, day, maxDay) => {
  return Math.floor((rent * (maxDay - day + 1)) / maxDay);
};
export const calculateTotalDues = (arr) => {
  let val = 0;

  let data = arr.map((data) => {
    val = val + parseInt(data.due) - parseInt(data.collections);
  });
  return val;
};
export const allDues = (dues, collection) => {
  let val = 0;
  let col = 0;
  for (let i = 0; i < dues.length; i++) {
    val = val + parseInt(dues[i].due);
  }
  for (let i = 0; i < collection.length; i++) {

    col = col + parseInt(collection[i].amount);
  }
  return val - col;
};
export const generateIndiDues = (dues, collection, tenantId) => {
  const collections = collection.filter((unit) => unit.tenantId == tenantId);
  const due = dues.filter((unit) => unit.tenantId == tenantId)
  let val = 0;
  let col = 0;
  for (let i = 0; i < due.length; i++) {
    val = val + parseInt(due[i].due);
  }

  for (let i = 0; i < collections.length; i++) {

    col = col + parseInt(collection[i].amount);

  }

  return val - col;
};
export const generateLockIn = (period, date, rent) => {
  const newDate = new Date(date);
  let present_month = newDate.getMonth();
  let present_year = newDate.getFullYear();
  let newYear = present_year;

  let arr = [];
  for (let i = 1; i < period; i++) {
    let testMonth = (present_month + i) % 12;
    if (testMonth < present_month) {
      newYear = present_year + 1;
    }

    let obj = {
      type: monthName(testMonth).name + " Rent",
      rent: rent,
      total: rent,
      due: rent,
      collection: 0,
      discount: 0,
      description: "",
      dueDate: moment({ year: newYear, month: testMonth, day: 1 }).format(
        "YYYY-MM-DD"
      ),
    };
    arr.push(obj);
  }

  return arr;
};
export const returnMonthName=(month)=>{
  if(month==1) return "Jan"
  if(month==2) return "Feb"
  if(month==3) return "Mar"
  if(month==4) return "Apr"
  if(month==5) return "May"
  if(month==6) return "Jun"
  if(month==7) return "Jul"
  if(month==8) return "Aug"
  if(month==9) return "Sep"
  if(month==10) return "Oct"
  if(month==11) return "Nov"
  if(month==12) return "Dec"

}
export const beautiDate=(date)=>{
   let newDate=date.split("-")
   let day=newDate[2]
   let year=newDate[0]
   let month=returnMonthName(newDate[1])
   let dateUnit=day+" "+month+" "+year
   return dateUnit
}

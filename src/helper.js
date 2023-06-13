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
        arr.push(room);
        counter = counter + 1;
      }
    }
  }
  return arr;
};

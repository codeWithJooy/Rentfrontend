import { updateToast } from "../actions/toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const checkFloors = (floor) => {
  if (floor == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Total Floors",
      message: "PLease add floors",
    });
    return false;
  } else if (isNaN(floor)) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add a Number",
      message: "PLease add number",
    });
    return false;
  }
  else if (floor == 0) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Floors Cannot be zero",
      message: "Add another number"
    })
  }
  return true;
};

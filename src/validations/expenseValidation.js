import { updateToast } from "../actions/toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const checkExpenses = (amount,paidTo) => {
  if (amount == "" || amount==0) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "PLease Add Amount",
    });
    return false;
  } else if (isNaN(amount)) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add a Number",
      message: "PLease add number",
    });
    return false;
  }
  else if (paidTo=="") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Please Add Paid To Person",
    })
    return false
  }
  return true;
};
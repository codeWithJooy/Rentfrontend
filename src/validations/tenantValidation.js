import { updateToast } from "../actions/toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const addTenantValidation = (data) => {
  const { name, number } = data;
  if (name == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Tenant Name",
      message: "Tenant Name Cannot Be Empty",
    });
    return false;
  } else if (number == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Tenant Number",
      message: "Tenant Number Cannot Be Empty",
    });
    return false;
  } else if (number.length != 10) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Validate Phone Number",
    });
    return false;
  }
  return true;
};

import { updateToast } from "../actions/toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const signupValidation = (user) => {
  const { first, last, email, password } = user;
  if (first == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add First Name",
      message: "First Name Cannot Be Empty",
    });
    return false;
  } else if (last == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Last Name",
      message: "Last Name Cannot Be Empty",
    });
    return false;
  } else if (email == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Email",
      message: "Email Cannot Be Empty",
    });
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Correct Email",
      message: "Email Format Not Correct",
    });
    return false;
  } else if (password == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Password",
      message: "Password Cannot Be Empty",
    });
    return false;
  }
  return true;
};

export const propertyValidation = (property) => {
  const { name, contact, pincode } = property;
  if (name == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Property Name",
      message: "Property Name Cannot be Empty",
    });
    return false;
  }
  if (contact == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Property Contact",
      message: "Property Contact Cannot be Empty",
    });
    return false;
  }
  if (name == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Property Pincode",
      message: "Property Pincode Cannot be Empty",
    });
    return false;
  }
  return true;
};

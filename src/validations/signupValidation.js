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
  const { name, contact, pincode, code } = property;
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
  if (pincode == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Property Pincode",
      message: "Property Pincode Cannot be Empty",
    });
    return false;
  }
  if (code == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Add Property Code",
      message: "Property Code Cannot be Empty",
    });
    return false;
  }
  if (! /^[A-Za-z0-9]*$/.test(code)) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Only Letters and Numbers Required",
    });
    return false;
  }
  if (code.length > 6 || code.length < 6) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Code Should be of 6 digits.",
    });
    return false;
  }
  return true;
};

export const loginValidation = (user) => {
  const { email, password } = user;
  if (email == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Email Cannot Be Empty",
      message: "Please Add Email",
    });
    return false;
  } else if (password == "") {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Empty Password",
      message: "Password Cannot be Empty",
    });
    return false;
  }
  return true;
};

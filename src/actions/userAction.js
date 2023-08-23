import {
  USER_SIGNUP,
  USER_PROPERTY,
  USER_LOGIN,
} from "../actionTypes/userAction";
import { userApi, setupApi } from "../apis/apis";
import { dispatchAction } from "./actionHelper";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { updateToast } from "./toastActions";
import {
  signupValidation,
  propertyValidation,
  loginValidation,
} from "../validations/signupValidation";

export const userSignup = async (data) => {
  try {
    let user = {
      first: data.firstName,
      last: data.lastName,
      email: data.email,
      password: data.password,
    };
    if (!signupValidation(user)) return;

    const response = await userApi.post("/signup", user);
    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Signup Successful",
        message: "Welcome To RentPG",
      });
      dispatchAction(USER_SIGNUP, response.data);
      return true;
    } else if (response.data.code == 409) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "User Present Already",
        message: "Login TO RentPG",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
export const userProperty = async (data, userId) => {
  try {
    let property = {
      name: data.name,
      contact: data.contact,
      pincode: data.pincode,
      code: data.code,
      userId: userId,
    };
    if (!propertyValidation(property)) return;

    const response = await setupApi.post("/newProperty", property);

    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Property Added",
        message: "New Property",
      });
      dispatchAction(USER_PROPERTY, response.data);
      return true;
    }
  } catch (error) {
    return error;
  }
};
export const userLogin = async (data) => {
  try {
    const user = {
      email: data.email,
      password: data.password,
    };

    if (!loginValidation(user)) return;

    const response = await userApi.post("/login", user);

    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Login Successful",
        message: "Welcome To RentPG",
      });
      dispatchAction(USER_LOGIN, response.data);
      return true;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "User Not Present",
        message: "Signup to RentPg",
      });
      return;
    } else if (response.data.code == 401) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Password didn't Match",
        message: "Check Your Password",
      });
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};

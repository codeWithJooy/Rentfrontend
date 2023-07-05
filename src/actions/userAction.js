import { USER_SIGNUP } from "../actionTypes/userAction";
import { userApi } from "../apis/apis";
import { dispatchAction } from "./actionHelper";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { updateToast } from "./toastActions";
import { signupValidation } from "../validations/signupValidation";

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
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

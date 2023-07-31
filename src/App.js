import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Splash from "./Pages/Splash/Splash";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Add from "./Pages/Login/Add";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";
import Floors from "./Pages/Property/Floors/Floors";
import Rooms from "./Pages/Property/Rooms/Rooms";
import RoomUnit from "./Pages/Property/Rooms/RoomUnit";

import AddTenant from "./Pages/Tenant/AddTenant";
import Tenant from "./Pages/Tenant/Tenant";
import TenantProfile from "./Pages/Tenant/TenantProfile";

import DuesMain from "./Pages/Dues/DuesMain";
import Dues from "./Pages/Dues/Dues";
import DueAdd from "./Pages/Dues/DueAdd";

import Expense from "./Pages/Expense/Expense";
import ExpenseDetails from "./Pages/Expense/ExpenseDetails";

import Food from "./Pages/Food/Food";

import Member from "./Pages/Member/Member";
import MemberAdd from "./Pages/Member/MemberAdd";

import Announcement from "./Pages/Announcement/Announcement";
import AddAnnouncement from "./Pages/Announcement/AddAnnouncement";
import Toasty from "./Components/Toasty/Toasty";
import MemberProfile from "./Pages/Member/MemberProfile";

import Receipt from "./Pages/Receipt/Receipt";

import Student from "./Pages/Student/Student";
import Complaint from "./Pages/Student/Complaint";
import ComplaintHeader from "./Components/Header/StudentHeader/ComplaintHeader";
import ComplaintHolder from "./Pages/Student/ComplaintHolder";
import StudentSignUp from "./Pages/Student/Signup/StudentSignUp";
import StudentLogin from "./Pages/Student/Signup/StudentLogin";
import StudentNumberLogin from "./Pages/Student/Signup/StudentNumberLogin";
import StudentAccount from "./Pages/Student/Account/StudentAccount";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" component={Splash} />
        <Route path="/get-started" component={GetStarted} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/add" component={Add} />
        <Route path="/home" component={Home} />
        <Route path="/property" component={Property} />
        <Route path="/floor" component={Floors} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/room" component={RoomUnit} />

        <Route path="/tenant" component={Tenant} />
        <Route path="/addtenant" component={AddTenant} />
        <Route path="/tenantProfile" component={TenantProfile} />
        <Route path="/dues" component={DuesMain} />
        <Route path="/dueadd" component={DueAdd} />

        <Route path="/expense" component={Expense} />
        <Route path="/expensedetails" component={ExpenseDetails} />

        <Route path="/food" component={Food} />

        <Route path="/member" component={Member} />
        <Route path="/addMember" component={MemberAdd} />
        <Route path="/memberProfile" component={MemberProfile} />

        <Route path="/announcement" component={Announcement} />
        <Route path="/addann" component={AddAnnouncement} />

        <Route path="/receipt" component={Receipt} />

        <Route path="/studentSignUp" component={StudentSignUp} />
        <Route path="/studentLogin" component={StudentLogin} />
        <Route path="/studentNumberLogin" component={StudentNumberLogin} />
        <Route path="/student" component={Student} />
        <Route path="/complaint" component={Complaint} />
        <Route path="/complaintHolder" component={ComplaintHolder} />
        <Route path="/studentAccount" component={StudentAccount} />
      </Switch>
      <Toasty />
    </BrowserRouter>
  );
};

export default App;

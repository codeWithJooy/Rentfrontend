import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getStudentComplaints } from "../../../actions/Student/studentAction";

const StudentComplaint = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    const { userId, propertyId, tenantId } = useSelector(state => state.student.studentData)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getStudentComplaints(userId, propertyId, tenantId)
            setTempData(data)
        })()
    },[])
  return (
    <div className="stuMainUnit">
      <div className="stuMainHeader">
        <p>My Complaints</p>
      </div>
      <div className="stuMenuSection">
              <Slider {...settings}>
                  {
                      tempData.length > 0 && 
                      tempData.map((data, key) => (
                          <ComplaintCard type={data.type}
                              subType={data.subType}
                              description={data.description}
                              status={data.status} key={key} />
                      ))
                  }
        </Slider>
      </div>
    </div>
  );
};

export default StudentComplaint;

const ComplaintCard = ({type,subType,description,status}) => {

    return (
        <div className='comCard'>
            <div className='comCardTop'>
                <div className='comCardImg'>
                  <img src="Assets/components/picture.png" />
                </div>
                <div className='comCardText'>
                    <div className='comCardTypeStudent'>
                        <span>{type}</span> <span>{subType}</span>
                    </div>
                    <div className='comCardDescription'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

            <div className='comCardStatus'>
                <div className='comStatusTitleStudent'>
                    <p>{status}</p>
                </div>

            </div>
        </div>
    )
}
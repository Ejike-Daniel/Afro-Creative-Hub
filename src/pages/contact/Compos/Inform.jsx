import { Link } from "react-router-dom";
import Phone from "../../../assets/phoneCall.svg";
import EmailMessage from "../../../assets/emailMessage.svg";
import LocationIcon from "../../../assets/location.svg";
import XIcon from "../../../assets/XIconforContact.svg";
import IGIcon from "../../../assets/IGIconforContact.svg";
import Circle from "../../../assets/circle.png";
import Cone from "../../../assets/cone.png";




const Inform = ()=>{
    return(
        <div className=" p-8 text-white bg-duckyYellow rounded-[10px] flex flex-col gap-10 relative" >

            <div className=" pb-[2rem]" >
                <h3 className=" text-2xl font-semibold">Contact Information</h3>
                <p>Say something to start a live chat!</p>
            </div>
            <div className=" flex flex-col gap-8">
                <div className=" flex gap-4">
                    <Link to=""> <img src={Phone} alt="" /></Link>
                    <Link to="">+1012 3456 789</Link>
                </div>

                <div className=" flex gap-4">
                    <Link to=""> <img src={EmailMessage} alt="" /></Link>
                    <Link to="">Demo@gmail.com</Link>
                </div>

                <div className=" flex  gap-4">
                    <Link to=""><img src={LocationIcon} alt="" /></Link>
                    <Link to="" className=" w-[15rem] md:w-[20rem] ">132 Dartmouth Street Boston, Massachusetts 12156 United States </Link>
                </div>
            </div>
            <div className=" flex pt-[8rem] gap-5">
                <img src={XIcon} alt="X icon" />
                <img src={IGIcon} alt="ig icon" />
            </div>
            <img src={Circle} alt="" className=" absolute bottom-[4.5rem] right-[4rem]" />

            <img src={Cone} alt="" className=" absolute bottom-0 right-0"/>
            
           

        </div>
    )
}

export default Inform
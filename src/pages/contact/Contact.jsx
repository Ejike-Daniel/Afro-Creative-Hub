import Container from "../../components/Container";
import Card from "./Compos/Card";
import topMixed from "../../../src/assets/bgBottommixed.png";
import bottommixed from "../../../src/assets/bgTopmixed.png";

const Contact = () => {
  return (

    
     
      
    <Container>
      <div className=" relative">
       <img src={topMixed} alt="" className=" w-[30rem] absolute top-[-4rem] bottom-[rem] right-0 -z-50 " />
      
      
      <div className=" mx-auto">
        <h2 className=" text-center text-duckyYellow text-3xl font-bold">Contact Us</h2>
      <p className=" text-center pb-[3rem]">
        Any question or remarks? Just write us a message!
      </p>
     <Card/>
    </div>
    <img src={bottommixed} alt="" className=" w-[30rem] absolute  top-[26rem] left-0 -z-50 " />
    </div>
    </Container>

    
 
  );
};

export default Contact;



const FormArea = () => {
  return (
    <div className=" p-6 pb-[9rem] lg:w-[30rem] md:pr-8 md:pt-[5rem] flex flex-col gap-8 relative">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="  w-full flex flex-col">
          <label htmlFor="Firstname"> First Name</label>
          <input
            className=" border-b-2 border-granite "
            id="Firstname"
            type="text"
          />
        </div>
        <div className="  w-full flex flex-col">
          <label htmlFor="Lastname"> Last Name</label>
          <input
            className=" border-b-2 border-granite"
            id="Lastname"
            type="text"
          />
        </div>
      </div>

      <div className="  flex flex-col md:flex-row gap-8">
        <div className="  w-full flex flex-col ">
          <label htmlFor="Email"> Email</label>
          <input
            className=" border-b-2 border-granite"
            id="Email"
            type="email"
          />
        </div>

        <div className="  w-full flex flex-col">
          <label htmlFor="Phonenumber"> Phone Number</label>
          <input
            className=" border-b-2 border-granite"
            id="Phonenumber"
            type="tel"
          />
        </div>
      </div>

      <div className=" pb-[2rem] flex flex-col">
        <label htmlFor="message"> Message</label>
        <input
          className="  border-b-2 border-granite"
          id="message"
          type="text"
        />
      </div>
      
      <button className=" p-[0.5rem] rounded-lg bg-black w-[11rem] ml-auto text-white">Send Message</button>
  

    
    </div>
  );
};
export default FormArea;

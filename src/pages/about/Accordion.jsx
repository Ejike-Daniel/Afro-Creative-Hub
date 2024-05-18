import { TbMessageCircleQuestion } from "react-icons/tb";
import { useState } from "react";
import faqData from "./FaqData";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = () => {
  // Initialize state to track the open/closed state for each accordion item
  const [openAccordions, setOpenAccordions] = useState(
    Array(faqData.length).fill(false)
  );

  // Function to toggle the open/closed state for a specific accordion item
  const toggleAccordion = (index) => {
    setOpenAccordions((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full bg-white flex flex-col gap-3 p-4 font-poppins text-midnight">
      <div className="flex gap-3 items-center">
        <div className="bg-gray-200 w-9 px-[0.2rem] py-[0.2rem] h-9 rounded-lg text-duckyYellow text-3xl font-semibold">
          <TbMessageCircleQuestion />
        </div>
        <p className="font-medium">FAQ QUESTION</p>
      </div>
      <h3 className="text-2xl font-semibold whitespace-nowrap"> Frequently Asked Question</h3>
      <div className=" mt-5 lg:mt-10">
        {faqData.map(({ question, answer }, index) => (
          <div key={index} className="py-4 border-t-2 border-duckyYellow">
            <button
              onClick={() => toggleAccordion(index)} // Pass the index to toggleAccordion
              className="flex justify-between w-full border-l-[3px] px-2 border-duckyYellow"
            >
              <span className=" text-sm md:text-lg">{question}</span>
              {openAccordions[index] ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out px-2 ${
                openAccordions[index]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

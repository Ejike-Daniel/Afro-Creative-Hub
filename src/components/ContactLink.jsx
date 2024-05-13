import { Link } from "react-router-dom";

const ContactLink = () => {
  return (
    <div>
      <Link
        to="/contact"
        className={
          "bg-lightTan text-midnight px-6 py-3 md:py-10 lg:py-[2.35rem] whitespace-nowrap font-medium "
        }
      >
        Contact Us
      </Link>
    </div>
  );
};

export default ContactLink;

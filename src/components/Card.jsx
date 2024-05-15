import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div
      className={`${className} bg-tealishGreen text-center shadow-lg w-[90%]  md:w-[33%] h-[15rem] px-6 py-12 `} 
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Card;

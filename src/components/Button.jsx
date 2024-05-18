import PropTypes from "prop-types";
const Button = ({ children, className, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`${className}  text-center font-medium w-56 md:w-[16rem] text-white lg:hover:text-midnight lg:hover:bg-sunriseOrange py-3 rounded-3xl`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;

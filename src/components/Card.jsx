import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div className={`${className} bg-tealishGreen shadow-lg w-24 `}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Card;

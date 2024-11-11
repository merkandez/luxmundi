import PropTypes from "prop-types";

function SliderDot({ active }) {
  return <div className={`dot ${active ? "active" : ""}`}></div>;
}

SliderDot.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default SliderDot;
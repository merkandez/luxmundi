import styled from "styled-components";
import PropTypes from "prop-types";

const Card = ({ title, description }) => (
  <CardWrapper>
    <CardImage />
    <CardContent>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContent>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CardWrapper = styled.div`
  background-color: #111111;
  border-radius: 4px;
  padding: 16px;
  text-align: left;
  color: #ffffff;
  border: 1px solid #222;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #333;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1);
    }
  }

  &:active {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #ffffff, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;

const CardImage = styled.div`
  background-color: #222;
  width: 100%;
  height: 200px;
  border-radius: 2px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const CardContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
    font-weight: 500;
    transition: color 0.3s ease;

    ${CardWrapper}:hover & {
      color: #fff;
    }
  }

  p {
    font-size: 0.9rem;
    color: #999;
    line-height: 1.5;
  }
`;

export default Card;

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

export default Card;

const CardWrapper = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  text-align: left;
  color: #ffffff;
`;

const CardImage = styled.div`
  background-color: #444444;
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const CardContent = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9rem;
    color: #cccccc;
  }
`;

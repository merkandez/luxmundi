// import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 1.6rem;
  background: #1a1a1a;
  border-radius: 0.75rem;
  box-shadow: 0px 20px 24px -4px rgba(10, 13, 18, 0.1);
  position: relative;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background: ${(props) =>
    props.variant === "delete"
      ? "rgba(255, 76, 76, 0.1)"
      : "rgba(168, 85, 247, 0.1)"};
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => (props.variant === "delete" ? "#FF4C4C" : "#A855F7")};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 0.9rem;
  color: #9ca3af;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.variant === "cancel" &&
    `
    background: transparent;
    border: 1px solid #374151;
    color: #FFFFFF;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `}

  ${(props) =>
    props.variant === "delete" &&
    `
    background: #DC2626;
    color: white;
    &:hover {
      background: #B91C1C;
    }
  `}

  ${(props) =>
    props.variant === "confirm" &&
    `
    background: #A855F7;
    color: white;
    &:hover {
      background: #7C3AED;
    }
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #9ca3af;
  }
`;

const NotificationCard = ({
  variant = "confirm",
  title,
  message,
  onCancel,
  onAction,
  actionLabel,
  cancelLabel = "Cancel",
}) => {
  return (
    <Card>
      <IconWrapper variant={variant}>
        <Icon variant={variant}>
          {variant === "delete" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </Icon>
      </IconWrapper>

      <Title>{title}</Title>
      <Message>{message}</Message>

      <ButtonGroup>
        <Button variant="cancel" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button
          variant={variant === "delete" ? "delete" : "confirm"}
          onClick={onAction}
        >
          {actionLabel || (variant === "delete" ? "Delete" : "Confirm")}
        </Button>
      </ButtonGroup>

      <CloseButton onClick={onCancel}>
        <X size={20} />
      </CloseButton>
    </Card>
  );
};

NotificationCard.propTypes = {
  variant: PropTypes.oneOf(["delete", "confirm"]),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  actionLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
};

NotificationCard.defaultProps = {
  variant: "confirm",
  cancelLabel: "Cancel",
};

export default NotificationCard;

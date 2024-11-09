import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import PropTypes from "prop-types";

const ExploreSection = ({ cards = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(cards.length / cardsPerPage));

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <Section>
      <SectionHeader>
        <Title>Destinos</Title>
        <Subtitle>Discover amazing destinations</Subtitle>
      </SectionHeader>

      <CardGrid>
        {currentCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </CardGrid>

      {totalPages > 1 && (
        <Pagination>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>

          <PageNumbers>
            {[...Array(totalPages)].map((_, index) => (
              <PageNumber
                key={index}
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PageNumber>
            ))}
          </PageNumbers>

          <PaginationButton
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </Pagination>
      )}
    </Section>
  );
};

ExploreSection.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Section = styled.section`
  padding: 60px 0;
  background-color: #111111;
  margin-bottom: 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: #999;
  font-size: 1.1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 12px;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 48px;
`;

const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid #29c9a9;
  color: #29c9a9;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #29c9a9;
    color: #000;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  gap: 8px;
`;

const PageNumber = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  background: ${(props) => (props.active ? "#29c9a9" : "transparent")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(props) =>
      props.active ? "#29c9a9" : "rgba(41, 201, 169, 0.1)"};
  }
`;

export default ExploreSection;

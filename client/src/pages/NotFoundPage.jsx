import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para los contenedores generales
const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 32px;
`;

// Estilos para la primera sección (lado izquierdo)
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  background-color: #1e1e1e;
  padding: 48px;
  border-radius: 10px;
`;

const Group = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 562px;
  padding: 0 32px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  position: relative;
  min-width: 0;
  padding: 0 32px;
  z-index: 1;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  z-index: 2;
`;

const Text = styled.span`
  color: #f5f5f5;
  font-family: Inter, sans-serif;
  font-size: 60px;
  font-weight: 600;
  line-height: 72px;
  text-align: left;
  letter-spacing: -1.2px;
  z-index: 3;
`;

const Text2 = styled.span`
  color: #f5f5f5;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  z-index: 4;
`;

const Section2 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 16px;
  position: relative;
  z-index: 5;
`;

const GoHomeLink = styled(Link)`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

// Estilos para la segunda sección (lado derecho)
const RightContainer = styled.div`
  width: 50%;
  position: relative;
  height: 960px;
  background: url(../client/src/assets/ImgNotFound/4b3e7afdcd152603f2ad1adeb1e0580e.jpeg)
    no-repeat center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
`;

export default function NotFoundPage() {
  return (
    <MainWrapper>
      {/* Lado izquierdo */}
      <LeftContainer>
        <Group>
          <Box>
            <Section>
              <Text>Oh oh, no encontramos la página...</Text>
              <Text2>
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
              </Text2>
              <Section2>
                <GoHomeLink to="/">Volver a Home</GoHomeLink>
              </Section2>
            </Section>
          </Box>
        </Group>
      </LeftContainer>

      {/* Lado derecho */}
      <RightContainer />
    </MainWrapper>
  );
}

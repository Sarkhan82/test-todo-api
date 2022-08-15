import React from 'react';
import styled from '@emotion/styled';

interface GRCardProps {
  title: string;
  subTitle: string;
}

const GRCard = ({title, subTitle}: GRCardProps) => {
  return (
    <Container>
      <p>{title}</p>

      <p>{subTitle}</p>
    </Container>
  );
};

export default GRCard;

const Container = styled.div`
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #FA742B;
  color: white;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.2), 1px 1px 5px 1px rgba(0,0,0,.2);
  font-family: "Comic Sans MS";

  > p:first-child {
    font-weight: bold;
  }

  > p {
    text-align: center;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { category } from '../data';
import CategoriesItem from './CategoriesItem';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: 'opx', flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {category.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
// import NewsLetter from '../Components/NewsLetter';
// import Footer from '../Components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Container = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background: ${(props) => (props.type === 'filled' ? 'brown' : 'transparent')};
  color: white;
  background-color: red;
`;

const Title = styled.h1`
  margin: 20px;
  margin-right: 600px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const ProductcList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // const [products, setProducts] = useState('');
  // const filtredProducts = products.filter((product) => {
  //   return product.title.toLowerCase().includes(value.toLowerCase());
  // });

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Top>
        <Link to='/'>
          <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
        <Title>{cat}</Title>
      </Top>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>green</Option>
            <Option>gray</Option>
            <Option>yellow</Option>
            <Option>blue</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  );
};

export default ProductcList;

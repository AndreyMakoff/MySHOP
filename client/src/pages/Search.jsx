import React from 'react';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mobile } from '../responsive';

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchInput = ({ search, value }) => {
  return (
    <Left>
      <SearchContainer>
        <Input value={value} onChange={(e) => search(e)} placeholder='Search' />
        <Search style={{ color: 'gray', fontsize: 16 }} />
      </SearchContainer>
    </Left>
  );
};

SearchInput.propTypes = {
  search: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;

import React from 'react';
import List from '../components/List/List';

import Theme from '../Theme/Theme';

import { positions } from '../constants/Positions'; 

const ProductsScreen = ({ route }) => {
  const { name } = route.params;

  const listPositions = positions[name];

  return (
    <Theme>
      <List
        list={ listPositions }
        paddingHorizontal={ 18 }
        listname={ 'products' }
      />
    </Theme>
  );
}

export default ProductsScreen;
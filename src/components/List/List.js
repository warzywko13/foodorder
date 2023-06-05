import React from 'react';
import { ScrollView, Text } from 'react-native';

import ProductItem from './ProductItem';
import CartItem from './CartItem';

const List = ({ list, paddingHorizontal, listname }) => {

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal }}>
          {
            list.map((el) => {
              return listname == 'products' ? (
                <ProductItem key={el.name} {...el} />
              ) : (
                <CartItem key={el.name} {...el} />
              )
            })
          }
    </ScrollView>
  );
}

export default List;
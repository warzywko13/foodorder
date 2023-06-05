import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

import { ShoppingCartIcon } from 'react-native-heroicons/solid';
import { addToCart, removeFromCart } from '../../../reducers/cartSlice';
import ListBody from '../../../Theme/ListBody';

const ProductsItem = ({ name, description, cost }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
  
    const handleProductClick = (item, productAdded) => {
      if(!productAdded) {
        dispatch(addToCart(item));
      } else {
        dispatch(removeFromCart(item));
      }
  
    }

    const findName = Boolean(cart.find(el => el.name === name));

    return (
        <ListBody>
            <Text className="text-lg border-b-2 border-b-gray-400">{name}</Text>
            <Text className="mt-1">{description}</Text>
            <View className="flex flex-row justify-between mt-2">
                <View className="flex flex-row bg-primary rounded-lg p-1">
                    <TouchableOpacity 
                        className="flex flex-row items-center"
                        onPress={() => handleProductClick({name, description, cost}, findName) }
                    >
                        <ShoppingCartIcon size="20" color={'black'} disabled={findName} />
                        <Text className="text-right mx-2 font-bold text-xl">{findName ? 'Dodano' : 'Dodaj'}</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-right mr-2 font-bold text-lg">{cost.toFixed(2)} zł</Text>
            </View>
        </ListBody>
    );
}

export default ProductsItem;
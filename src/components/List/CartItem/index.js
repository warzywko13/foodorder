import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { decrementQuantity, incrementQuantity } from "../../../reducers/cartSlice";

import ListBody from "../../../Theme/ListBody";

const CartItem = ({ name, cost, quantity }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (item) => {
    dispatch(incrementQuantity(item));
  }

  const handleSubProduct = (item) => {
    dispatch(decrementQuantity(item));
  }

  return (
      <ListBody>
        <Text className="text-lg border-b-2 border-b-gray-400">{name}</Text>
        <View
          className="flex flex-row justify-between"
        >
          <Text className="text-2xl font-bold text-dark">{cost.toFixed(2)} zł</Text>
          <View
            className="flex flex-row bg-primary rounded px-2 py-1 mt-1"
          >
            <TouchableOpacity
              onPress={() => handleAddProduct({name, cost, quantity})}
            >
              <Text className="text-4xl mr-5 font-bold">+</Text>
            </TouchableOpacity>
              <Text className="text-4xl">{quantity}</Text>
            <TouchableOpacity
              onPress={() => handleSubProduct({name, cost, quantity})}
            >
              <Text className="text-4xl ml-5 font-bold">−</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ListBody>
  )
}

export default CartItem;
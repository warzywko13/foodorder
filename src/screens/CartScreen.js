import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import {  useSelector } from "react-redux";

import List from "../components/List/List";
import Total from "../components/Total";

import Theme from "../Theme/Theme";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  
  const carLength = Boolean(cart.length > 0);

  const totalCost = carLength ? <Total cart={ cart } /> : null;
  const carList = (
    carLength ? (
      <>
        <List  
          list={ cart }
          paddingHorizontal={ 10 }
          listname={ 'carts' }
        />
        <TouchableOpacity>
          <Text
            className="text-center font-bold text-3xl py-1 my-2 bg-secondary rounded"
          >
            Zamów
          </Text>
        </TouchableOpacity>
      </>
    ) : (
      <Text
        className="text-center font-bold text-3xl mt-10 text-secondary rounded"
      >
        Brak zamówień...
      </Text>
    )
  );

  return (
    <Theme>
      { totalCost }
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 10}}
      >
        { carList }
      </ScrollView>
    </Theme>
  );
}

export default CartScreen;
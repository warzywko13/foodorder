import React from 'react';
import { Text } from "react-native";

const Total = ({ cart }) => {
    const sum = cart.map(el => el.cost * el.quantity).reduce((prev, next) => prev + next);

    return (
        <Text
            className="text-center font-bold text-3xl py-1 mb-2 bg-primary rounded"
        >
            Suma: {sum}zł
        </Text>
    );
}

export default Total;
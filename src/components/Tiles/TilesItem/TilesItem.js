import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const TilesItem = ({ name, img, navigation }) => {
  return (
    <TouchableOpacity 
        key={name} className="flex justify-center items-center rounded-lg pb-3 my-1 space-y-1 bg-secondary"
        onPress={() => navigation.navigate('products', { name })}
    >
        <Image source={img} className="h-40 w-44 rounded-lg" />
        <Text className="text-dark text-lg font-black uppercase">{name}</Text>
    </TouchableOpacity>
  );
}

export default TilesItem;
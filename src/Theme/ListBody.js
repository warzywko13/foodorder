import React from 'react';
import { View } from 'react-native';

const ListBody = ({ children }) => {
  return (
    <View 
        className="flex justify-center px-2 py-3 mb-3 bg-secondary rounded"
    >
        {children}
    </View>
  )
}

export default ListBody;
import React from 'react';
import { View, SafeAreaView, Image } from "react-native";

const Theme = (props) => {
  return (
    <View className="flex-1 relative">
    <View className="absolute h-full w-full bg-dark"></View>

    <SafeAreaView className="flex flex-1 mt-2">
          <Image 
              source={require('../../assets/img/brewicz.jpg')} 
              className="mx-auto h-32 w-44"  
          />
          
          {props.children}

      </SafeAreaView>
  </View>
  );
}

export default Theme;
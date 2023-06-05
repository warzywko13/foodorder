import React from 'react';
import { ScrollView, View } from 'react-native';

import TilesItem from './TilesItem/TilesItem';

const Tiles = ({ list, navigation, paddingHorizontal }) => {

    const tilesItemResult = (
        list.map(({name, img}) => (
            <TilesItem 
                key={name} 
                name={name} 
                img={img} 
                navigation={navigation}
            />
        ))
    );

    return (
        <ScrollView
            className="flex flex-wrap"
            contentContainerStyle={{paddingHorizontal}} 
        >   
            <View
                className="flex flex-row flex-wrap justify-between items-center w-full pb-3"
            >
                { tilesItemResult }
            </View>
        </ScrollView>
  );
}

export default Tiles;
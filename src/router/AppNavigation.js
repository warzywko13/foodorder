import React from 'react';
import { LogBox, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';

import { HomeIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions = {({route}) => ({
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#24282b',
                }
            })}    
        >
            <Stack.Screen name="Home" component={HomeTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions = {({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => menuIcons(route, focused),
                tabBarStyle: {
                    borderRadius: 10,
                    backgroundColor: '#f8ab05'
                }
            })}
        >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="products" component={ProductsScreen} options={{
                tabBarVisible: false,
                tabBarButton: () => null,
            }} />
            <Tab.Screen name="cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

const menuIcons = (route, focused) => {
    let icon;

    if(route.name === 'home'){
        icon = <HomeIcon size="40" color={focused ? "#24282b" : '#e2e2e2' }/>
    } else if(route.name === 'cart') {
        icon = <ShoppingCartIcon size="40" color={focused ? "#24282b" : '#e2e2e2' } />
    }

    return (
        <View className="pt-3 pb-3">
            {icon}
        </View>
    );
}

export default AppNavigation;

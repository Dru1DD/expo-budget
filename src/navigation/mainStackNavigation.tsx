import React, { FC } from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { MainScreen } from '../screens/MainScreen'
import { CatagoryScreen } from '../screens/CatagoryScreen'
import { AnalysisScreen } from '../screens/AnalysisScreen'
import { Profile } from '../screens/Profile'

import { MainStackParamlist } from '../types/navigationTypes'

const options: StackNavigationOptions = {
    headerShown: false,
    animationEnabled: false,
    cardStyle: { backgroundColor: '#363636'}
}

const Stack = createStackNavigator<MainStackParamlist>()


export const MainStackNavigation: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={options}
        >
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />
            <Stack.Screen 
                name="CatatgoryScreen"
                component={CatagoryScreen}
            />
            <Stack.Screen
                name="AnalysisScreen"
                component={AnalysisScreen}
            />
            <Stack.Screen 
                name="ProfileScreen"
                component={Profile}
            />
        </Stack.Navigator>
    )
}
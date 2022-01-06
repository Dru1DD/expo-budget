import React, { FC } from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, StackNavigationOptions, CardStyleInterpolators } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import { SplashScreen } from '../screens/SplashScreen'
import { SingIn } from '../screens/SingIn'
import { SingUp } from '../screens/SingUp'
import { PasswordChanger } from '../screens/PasswordChanger'
import { MainStackNavigation } from './mainStackNavigation'

import { RootStackParamList } from '../types/navigationTypes'


const options: StackNavigationOptions = {
    headerShown: false,
    animationEnabled: true,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyle: { backgroundColor: '#363636'}
}


const Stack = createStackNavigator<RootStackParamList>()

export const StackNavigation: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={options}
            >
                <Stack.Screen 
                    name="SplashScreen" 
                    component={SplashScreen} 
                    options={{
                        cardStyleInterpolator: Platform.OS === 'ios' ? CardStyleInterpolators.forVerticalIOS : CardStyleInterpolators.forFadeFromBottomAndroid
                    }}
                />
                <Stack.Screen 
                    name="SingIn" 
                    component={SingIn} 
                    options={{
                        cardStyleInterpolator: Platform.OS === 'ios' ? CardStyleInterpolators.forVerticalIOS : CardStyleInterpolators.forFadeFromBottomAndroid
                    }}
                />
                <Stack.Screen 
                    name="SingUp" 
                    component={SingUp}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
                    }}
                />
                <Stack.Screen 
                    name="PasswordChanger"
                    component={PasswordChanger}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
                    }}
                />
                <Stack.Screen 
                    name="MainStackNavigation" 
                    component={MainStackNavigation} 
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainScreen } from '../screens/MainScreen'
import { AccountScreen } from '../screens/AccountScreen'
import { AnalysisScreen } from '../screens/AnalysisScreen'
import { Profile } from '../screens/Profile'
import { StackNavigation } from './stackNavigation'

import { RootBottomTabParamList } from '../types/navigationTypes'
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>() 

export const BottomTabNavigation: FC = () => {
    return (
        <>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: "red",
                    tabBarStyle: {
                       backgroundColor: '#363636' 
                    },
                    tabBarIcon: ({ focused, size }) => {
                        let iconName: any
                        if(route.name === "MainScreen") {
                            iconName = focused 
                                    ? 'home'
                                    : 'home-outline'
                        } else if (route.name === "AccountScreen") {
                            iconName = focused 
                                    ? 'apps'
                                    : 'apps-outline'
                        } else if (route.name === "AnalysisScreen") {
                            iconName = focused 
                                    ? 'analytics'
                                    : 'analytics-outline'
                        } else if (route.name === 'ProfileScreen') {
                            iconName = focused
                                    ? 'person'
                                    : 'person-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={focused ? 'red' : 'rgba(255, 255, 255, 0.5)'} />
                    }
                })}
            >
                <BottomTab.Screen
                    name="MainScreen"
                    component={MainScreen}
                />
                <BottomTab.Screen
                    name="AccountScreen"
                    component={AccountScreen}
                />
                <BottomTab.Screen
                    name="AnalysisScreen"
                    component={AnalysisScreen}
                />
                <BottomTab.Screen
                    name="ProfileScreen"
                    component={Profile}
                />
            </BottomTab.Navigator>
        </>
    )
}
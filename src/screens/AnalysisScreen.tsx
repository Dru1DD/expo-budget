import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { IState } from '../redux/reducer/rootReducer'

import { analysisScreen as styles } from '../styles/analysisScreen'


export const AnalysisScreen: FC = () => {

    const state = useSelector((state: IState) => state)
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <StatusBar />
            </View>
            <View style={styles.footer}>
                
            </View>
        </View>
    )
}
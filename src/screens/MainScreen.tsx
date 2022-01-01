import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

import { mainScreen as styles } from '../styles/mainScreen'
export const MainScreen: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: 'white' }}>It`s Header Part</Text>
                <StatusBar />
            </View>
            <View style={styles.footer}>
                <Text style={{ color: 'white' }}>It`s Footer Part</Text>
            </View>
        </View>
    )
}
import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

import { catagoryScreen as styles } from '../styles/catagoryScreen'

export const CatagoryScreen: FC = () => {
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
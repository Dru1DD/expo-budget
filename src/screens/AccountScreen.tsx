import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

import { accountScreen as styles } from '../styles/accountScreen'

export const AccountScreen: FC = () => {
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
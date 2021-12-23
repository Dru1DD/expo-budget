import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, Text, Button } from 'react-native'
import { auth } from '../firebase'
import { RootStackParamList } from '../types/navigationTypes'

type profileScreenProp = StackNavigationProp<RootStackParamList , 'Profile'>

export const Profile: FC = () => {

    const navigation = useNavigation<profileScreenProp>()

    const signOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace('SplashScreen')
        })
        .catch((error: any) => alert(error.message))
    }
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
            <Text>{auth.currentUser?.email}</Text>

            <Button
                title="Sign Out"
                onPress={signOut}
            />
        </View>
    )
}
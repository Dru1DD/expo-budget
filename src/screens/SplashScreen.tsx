import React, { FC, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { RootStackParamList } from '../types/navigationTypes'
import { LinearGradient } from 'expo-linear-gradient'
import { splashScreen as styles } from '../styles/splashScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import { auth } from '../firebase'

type splashScreenProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

export const SplashScreen: FC = () => {

    const navigation = useNavigation<splashScreenProp>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any ) => {
            if(user) {
                navigation.navigate("MainStackNavigation")
            }
        })

        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={[styles.text, styles.headerText]}>
                    Личный финансовый органайзер
                </Text>
            </View>
            <Animatable.View style={styles.mainPart} animation="fadeInUpBig">
                <LinearGradient
                        style={styles.btn}
                        colors={['#FF166F', '#FF2D2F']}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SingIn')}
                        >
                            <Text style={[styles.text, styles.btnText]}>Начинаем</Text>
                        </TouchableOpacity>
                    </LinearGradient>
            </Animatable.View>
        </View>
    )
}
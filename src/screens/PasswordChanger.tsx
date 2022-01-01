import React, { FC, useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { passwordChanger as styles } from '../styles/passwordChanger'
import { LinearGradient } from 'expo-linear-gradient'
import { IPasswordChanger } from '../interfaces/passwordChangerInterface'
import { RootStackParamList } from '../types/navigationTypes'
import { StackNavigationProp } from '@react-navigation/stack'

type passwordChangerScreenProp = StackNavigationProp<RootStackParamList, 'PasswordChanger'>

export const PasswordChanger: FC = () => {
    const [data, setData] = useState<IPasswordChanger>({
        email: "",
        password: "",
        second_password: "",
        isValidEmail: true,
        isValidPassword: true,
        isValidSecondPassword: true,
        check_textInputChange: false,
        secureTextEntry: true,
        secureTextEntryPasswordHandler: true
    })

    const navigation = useNavigation<passwordChangerScreenProp>()

    const textInputChange = useCallback((e: string): void => { 
        const re = /\S+@\S+\.\S+/
        if (re.test(e)) {
            setData({
                ...data,
                email: e,
                check_textInputChange: true,
                isValidEmail: true
            })
        } else {
            setData({
                ...data,
                email: e,
                check_textInputChange: false,
                isValidEmail: false
            })
        }
    }, [])

    const handleValidUser = useCallback((e: string): void => {
        if(e.trim().length >= 4) setData({ ...data, isValidEmail: true})
        else setData({ ...data, isValidEmail: false})
    }, [])

    const handlePasswordChange = useCallback((e: string): void => {
        if (e.trim().length < 8 ) setData({ ...data, password: e, isValidPassword: false})
        else setData({ ...data, password: e, isValidPassword: true})
    }, [])

    const handleCheckPasswordChange = useCallback((e: string): void => {
        if(e.trim() !== data.password) setData({...data, second_password: e, isValidSecondPassword: false})
        else setData({ ...data, second_password: e, isValidSecondPassword: true})
    }, [])

    const updateSecureTextEntry = useCallback((): void => {
        setData({
            ...data, secureTextEntry: !data.secureTextEntry
        })
    }, [])

    const updateSecureTextEntrySecond = useCallback((): void => {
        setData({
            ...data, secureTextEntryPasswordHandler: !data.secureTextEntryPasswordHandler
        })
    }, [])

    const passwordRecovery: () => void = () => {
        console.log('Everything is ok')
        navigation.navigate("SplashScreen")
        // email, password
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.text_header}>CryptoInvest</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.title}>
                    Восстановление пароля
                </Text>
                <View style={styles.action}>
                    <View style={styles.icon}>
                        <FontAwesome name="user-o" color='white' size={20} />
                    </View>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={val => textInputChange(val)}
                        onEndEditing={e => handleValidUser(e.nativeEvent.text)}
                    /> 
                    {
                        data.check_textInputChange ? 
                            (
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={20} />
                                </Animatable.View>
                            ) : null
                    }
                </View>
                {
                    data.isValidEmail ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                Email is not correct
                            </Text>
                        </Animatable.View>
                    )
                }
                <View style={[styles.action, { marginTop: 35}]}>
                    <View style={styles.icon}>
                        <Feather name="lock" color="white" size={20} />
                    </View>
                    
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {
                            data.secureTextEntry ?
                                (
                                    <Feather name="eye-off" color="grey" style={{ paddingTop: 10 }} size={20} />
                                ) :
                                (
                                    <Feather name="eye" color="grey" style={{ paddingTop: 10 }} size={20} />
                                )
                        }
                    </TouchableOpacity>
                </View>
                {
                    data.isValidPassword  ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                Пароль должен быть сложнее
                            </Text>
                        </Animatable.View>
                    )
                }
                <View style={[styles.action, { marginTop: 35 }]}>
                    <View style={styles.icon}>
                        <Feather name="lock" color="white" size={20} />
                    </View>
                    <TextInput 
                        placeholder="Confirm password"
                        placeholderTextColor="white"
                        secureTextEntry={data.secureTextEntryPasswordHandler ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleCheckPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntrySecond}>
                        {
                            data.secureTextEntryPasswordHandler ?
                            (
                                <Feather name="eye-off" color="grey" size={20} />
                            ) :
                            (
                                <Feather name="eye" color="grey" size={20} />
                            )
                        }
                    </TouchableOpacity>
                </View>
                {
                    data.isValidSecondPassword ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                Пароли не совпадают
                            </Text>
                        </Animatable.View>
                    )
                }

                <LinearGradient 
                    style={[styles.styledButton, { alignSelf: 'center'}]}
                    colors={['#FF166F', '#FF2D2F']}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                    <TouchableOpacity
                        onPress={passwordRecovery}
                    >
                        <Text style={styles.buttonText}>
                            Восстановить пароль
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </Animatable.View>
        </View>
    )
}

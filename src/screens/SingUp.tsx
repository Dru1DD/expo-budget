import React, { FC, useState, useCallback } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { singUp as styles } from '../styles/singUp'
import * as Animatable from 'react-native-animatable'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { ISingUpData } from '../interfaces/singUpInterface'
import { RootStackParamList } from '../types/navigationTypes'
import { StackNavigationProp } from '@react-navigation/stack'
import { auth } from '../firebase'

type singUpScreenProp = StackNavigationProp<RootStackParamList, 'SingUp'>

export const SingUp: FC = () => {
    const [data, setData] = useState<ISingUpData>({
        username: '',
        isValidUsername: true,
        email: '',
        isValidEmail: true,
        password: '',
        confirm_password: '',
        isValidPassword: true,
        isValidConfirm: true,
        check_textInputChange: false,
        check_textInputChangeEmail: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const navigation = useNavigation<singUpScreenProp>()

    const textInputChangeUsername: (val: string) => void = (val) => {
        if(val.trim().length < 2) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUsername: false
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUsername: true
            })
        }
    }

    const textInputChangeEmail: (val: string) => void = (val) => {
        const re = /\S+@\S+\.\S+/
        if(re.test(val)) {
            setData({
                ...data,
                email: val,
                check_textInputChangeEmail: true,
                isValidEmail: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChangeEmail: false,
                isValidEmail: false
            })
        }
    }

    const handlePasswordChange: (val: string) => void = (val) => {
        if(val.trim().length < 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        }
    }

    const handleConfirmPasswordChange: (val: string) => void = (val) => {
        if(val.trim() !== data.password) {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirm: false
            })
        } else {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirm: true
            })
        }
    }

    const updateSecureTextEntry: () => void = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    
    const updateConfirmSecureTextEntry: () => void  = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }
    const register = (email: string, username: string, password: string) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials: any) => {
                const user = userCredentials.user;
                console.log(user)
            })
            .catch((error: any) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView 
            behavior='height'
            style={styles.container}
        >
            <StatusBar style="auto" />
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.title}>Регистрация</Text>
                <View style={[styles.action, { marginTop: 35 }]}>
                    <View style={styles.icon}>
                        <FontAwesome name="user" color="white" size={20} solid/>
                    </View>
                    <TextInput
                        placeholder="Имя"
                        placeholderTextColor="#fff"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChangeUsername(val)}
                    />
                    {
                        data.check_textInputChange ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="white" style={{ paddingTop: 10 }} size={20} />
                            </Animatable.View>
                        ) : null
                    }
                </View>
                {
                        data.isValidUsername ? null : (
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Имя должно быть длинее 2 символов</Text>
                            </Animatable.View>
                        )
                    }  
                <View style={[styles.action, { marginTop: 35 }]}>
                    <View style={styles.icon}>
                       <FontAwesome name="envelope" color="white" size={20} solid/> 
                    </View>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChangeEmail(val)}
                    />
                    {
                        data.check_textInputChangeEmail ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="white" style={{ paddingTop: 10 }} size={20} />
                            </Animatable.View>
                        ) : null
                    }
                </View>
                {
                    data.isValidEmail ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Введите email верного формата</Text>
                        </Animatable.View>
                    )
                }

                <View style={[styles.action, { marginTop: 35 }]}>
                    <View style={styles.icon}>
                        <FontAwesome name="lock" color="white" size={20} solid />
                    </View>
                    <TextInput 
                        placeholder='Пароль'
                        placeholderTextColor="#fff"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        { data.secureTextEntry ? (
                            <Feather name="eye-off" color="white" style={{ paddingTop: 10 }} size={20} />
                            ): (
                                <Feather name="eye" color="white" style={{ paddingTop: 10 }} size={20} />
                            )
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Пароль должен быть больше 8 символов</Text>
                    </Animatable.View>
                )}

                <View style={[styles.action, { marginTop: 35 }]}>
                    <View style={styles.icon}>
                       <FontAwesome name="lock" color="white" size={20} solid/> 
                    </View>
                    <TextInput 
                        placeholder='Подтвердите пароль'
                        placeholderTextColor="#fff"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        { data.confirm_secureTextEntry ? (
                                <Feather name="eye-off" color="white" style={{ paddingTop: 10}} size={20} />
                            ) : (
                                <Feather name="eye" color="white" style={{ paddingTop: 10}} size={20} />
                            )
                        }
                    </TouchableOpacity>
                </View>
                {
                    data.isValidConfirm ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Пароли не совпадают</Text>
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
                        onPress={() => register(data.email, data.username, data.password)}
                    >
                        <Text style={styles.buttonText}>Регистрация</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.logoText}>
                    <Text style={styles.logoSubtitle}>Уже есть аккаунт?{" "}
                        <Text 
                            style={{ fontWeight: "bold"}}
                            onPress={() => navigation.navigate("SingIn")}
                        >Авторизироваться</Text>
                    </Text>
                </View>
            </Animatable.View>
        </KeyboardAvoidingView>
    )
}
import React, { FC, useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Animatable from 'react-native-animatable'
import { singInStyles as styles } from '../styles/singIn'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { RootStackParamList } from '../types/navigationTypes'
import { StackNavigationProp } from '@react-navigation/stack'
import { ISingInData } from '../interfaces/singInInterface'
import { auth } from '../firebase'

type singInScreenProp = StackNavigationProp<RootStackParamList, 'SingIn'>

export const SingIn: FC = () => {
    const [data, setData] = useState<ISingInData>({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
      });

      const navigation = useNavigation<singInScreenProp>();
    
      const textInputChange: (e: string) => void = (e) => {
        const re = /\S+@\S+\.\S+/
        if (re.test(e)) {
          setData({
            ...data,
            email: e,
            check_textInputChange: true,
            isValidUser: true,
          });
        } else {
          setData({
            ...data,
            email: e,
            check_textInputChange: false,
            isValidUser: false,
          });
        }
      }
    
      const handleValidUser: (e: string) => void = (e) => {
        if (e.trim().length >= 4) {
          setData({ ...data, isValidUser: true });
        } else {
          setData({ ...data, isValidUser: false });
        }
      }
    
      const handlePasswordChange: (e: string) => void = (e) => {
        if (e.trim().length < 8) {
          setData({ ...data, password: e, isValidPassword: false });
        } else {
          setData({ ...data, password: e, isValidPassword: true });
        }
      }
    
      const updateSecureTextEntry: () => void = () => {
        setData({
          ...data,
          secureTextEntry: !data.secureTextEntry,
        });
      }

      const login: (email: string, password: string) => void = (email, password) => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredentials: any) => {
            const user = userCredentials.user;
            console.log(user)
          })
          .catch((error: any) => alert(error.message)) 
      }
    
      return (
        <View style={styles.container}>
          <StatusBar />
          <View
            style={styles.header}
          >
          </View>
          <Animatable.View
            animation="slideInLeft"
            style={styles.footer}
          >
            <Text
              style={styles.title}
            >
              Вход в аккаунт
            </Text>
            <View style={styles.action}>
              <View style={styles.icon}>
                <FontAwesome name="user-o" color='white' size={25} />
              </View>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#fff"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Неверный формат email</Text>
              </Animatable.View>
            )}
    
            <View style={[styles.action, { marginTop: 35 }]}>
              <View style={styles.icon}>
                  <Feather name="lock" color="white" size={25} />
              </View>
              
              <TextInput
                placeholder="Password"
                placeholderTextColor="#fff"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" style={{ paddingTop: 10}} size={25} />
                ) : (
                  <Feather name="eye" color="grey" style={{ paddingTop: 10}} size={25} />
                )}
              </TouchableOpacity>
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Пароль должен быть сложнее
                </Text>
              </Animatable.View>
            )}
    
            <TouchableOpacity
              onPress={() => navigation.navigate("PasswordChanger")}
            >
              <Text style={styles.forgotPassword}>Забыли пароль?</Text>
            </TouchableOpacity>
    
            <LinearGradient
              style={[styles.styledButton, { alignSelf: 'center'}]}
              colors={['#FF166F', '#FF2D2F']}
              start={[0, 0]}
              end={[1, 1]}
            >
    <TouchableOpacity
              onPress={(e) => { login(data.email, data.password) }}
            >
                <View
                  style={styles.signIn}
                >
                  <Text
                    style={styles.buttonText}
                  >
                    Войти
                  </Text>
                </View>
            </TouchableOpacity>
            </LinearGradient>
            
            <View style={styles.separatedGroup}>
              <View style={styles.line}></View>
                <Text style={styles.separatedText}>или</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.services}>
              <View style={styles.servIcon}>
                <FontAwesome name="facebook" color={'blue'} size={48} />
              </View>
              <View style={styles.servIcon}>
              </View>
            </View>
            <View style={styles.logoText}>
                        <Text style={styles.logoSubtitle}>
                            Ещё нет аккаунта?{" "}
                            <Text
                                onPress={() => navigation.navigate("SingUp")}
                                style={{fontWeight: "bold"}}
                            >Зарегистрироваться</Text>
                        </Text>
                    </View>
          </Animatable.View>
        </View>
      )
}
import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import Modal from 'react-native-modal'
import { auth } from '../firebase'


import { profile as styles } from '../styles/profile' 

export const Profile: FC = () => {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)

    const signOut = () => {
        auth.signOut()
        .then(() => {
            // Перезапуск приложения? 
        })
        .catch((error: any) => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Профиль</Text>
                <Text style={[styles.subtitle, { marginTop: 20 }]}>Персональная информация</Text>
                <View style={styles.textBox}>
                    <View style={{ 
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15
                    }}>
                        <Text style={styles.text}>ФИО:</Text>
                        <Text style={styles.textValue}>{auth.current?.name ? auth.current?.name : 'afdsknfsdkfnsd'}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15
                    }}>
                        <Text style={styles.text}>Электронная почта</Text>
                        <Text style={styles.textValue}>{auth.currentUser.email}</Text>
                    </View>
                </View>
                <LinearGradient
                    style={styles.styledButton}
                    colors={['#FF166F', '#FF2D2F']}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                        <TouchableOpacity
                            onPress={() => setIsModalOpen(!isModalOpen)}
                            // fill
                        >
                            <Text style={{ color: 'white', fontSize: 20}}>Выход</Text>
                        </TouchableOpacity>
                </LinearGradient>
            </Animatable.View>

            <Modal
                isVisible={isModalOpen}
                onDismiss={() => setIsModalOpen(!isModalOpen)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.title, { width: "100%" }]}>Выход</Text>
                        <Text style={styles.modalText}>Вы точно хотите выйти</Text>
                        <TouchableOpacity
                            style={styles.styledButton}
                            onPress={signOut}
                        >
                            <Text style={styles.styledText}>Выйти</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.styledButton, { marginTop: 10 }]}
                            onPress={() => { setIsModalOpen(!isModalOpen) }}
                        >
                            <Text style={styles.styledText}>Нет</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
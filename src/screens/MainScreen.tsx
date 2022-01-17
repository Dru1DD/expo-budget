import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { AntDesign, Entypo } from '@expo/vector-icons';

import Modal from 'react-native-modal'
import { mainScreen as styles } from '../styles/mainScreen'
import { ExpenseModal } from '../components/ExpenseModal'
import { SpendingFooter } from '../components/SpendingFooter'
import { IncomeFooter } from '../components/IncomeFooter'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamlist } from '../types/navigationTypes'
import { useNavigation } from '@react-navigation/native'

type mainScreenProp = StackNavigationProp<MainStackParamlist, 'MainScreen'>

export const MainScreen: FC = () => {

    const [ spending, setSpending ] = useState<boolean>(true)
    const [ income, setIncome ] = useState<boolean>(false)

    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const navigation = useNavigation<mainScreenProp>()

    return (
        <>
            <View style={styles.container}>
                <StatusBar />
                <Animatable.View animation={"fadeInDown"} style={styles.header}>
                    <View style={styles.headerText}>
                        <Text style={styles.headerGreeting}>Привет,</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProfileScreen')}
                        >
                            <Text style={styles.headerName}>Саша</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerAdd}>
                        <View style={{marginRight: 20}}>
                            <TouchableOpacity
                                onPress={() => setIsOpen(!isOpen)}
                            >
                            
                                    <AntDesign name="pluscircleo" size={36} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
                <Animatable.View animation={"fadeInUp"} style={styles.footer}>
                    <View style={styles.footerHeader}>
                        <TouchableOpacity
                            onPress={() => {
                                setSpending(!spending)
                                setIncome(!income)
                            }}
                            disabled={spending}
                        >
                            <Text
                                style={[styles.footerHeaderText, spending ? styles.activeHeader : null]}
                            >Рассходы</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                             onPress={() => {
                                setSpending(!spending)
                                setIncome(!income)
                            }}
                            disabled={income}
                        >
                            <Text 
                                style={[styles.footerHeaderText, income ? styles.activeHeader : null]}
                            >Доходы</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerMain}>
                        { spending ? <SpendingFooter/> : <IncomeFooter />}
                    </View>
                </Animatable.View>
            </View>
            
            <Modal
                isVisible={isOpen}
                onBackdropPress={() => setIsOpen(isOpen)}
                // onDismiss={() => setIsOpen(!isOpen)}\
                style={styles.centeredView}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', alignItems: 'flex-end'}}>
                            <TouchableOpacity
                                onPress={() => setIsOpen(!isOpen)}
                            >
                               <Entypo name="cross" size={36} color="black" /> 
                            </TouchableOpacity>
                            <ExpenseModal 
                                expense={spending ? 'Spending' : 'Income'}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import moment from 'moment'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { LinearGradient } from 'expo-linear-gradient';

import { IExpenseModalProps } from '../interfaces/expenseModal'
import { ADD_ITEM_SPENDING, ADD_ITEM_INCOME } from '../redux/action/actionTypes';

import { expenseModal as styles } from '../styles/components/expenseModal'

interface IPicker {
    label: string
    value: string
}
const spendingData: IPicker[] = [
    {
        label: "Еда",
        value: "Еда"
    },
    {
        label: "Кафе",
        value: "Кафе"
    },
    {
        label: "Развлечения",
        value: "Развлечения"
    },
    {
        label: "Транспорт",
        value: "Транспорт"
    },
    {
        label: "Коммуналка",
        value: "Коммуналка"
    },
    {
        label: "Одежда",
        value: "Одежда"
    },
    {
        label: "Аптека",
        value: "Аптека"
    },
    {
        label: "Интернет",
        value: "Интернет"
    },
    {
        label: "Налоги",
        value: "Налоги"
    },
    {
        label: "Телефон",
        value: "Телефон"
    }
];

const incomeData: IPicker[] = [
    {
        label: 'Зарплата',
        value: 'Зарплата'
    },
    {
        label: 'Фриланс',
        value: 'Фриланс'
    }, {
        label: 'Дивиденды',
        value: 'Дивиденды'
    }
]

export const ExpenseModal: FC<IExpenseModalProps> = ({ expense, isOpen, setIsOpen }) => {
    const [ price, setPrice ] = useState<number>(0)
    const [ catagory, setCatagory ] = useState<any>('')
    const [ discription, setDiscription ] = useState<string>('')

    const dispatch = useDispatch()

    const addItem: () => void = async() => {
        if (expense === 'Spending') {
            await dispatch({
                type: ADD_ITEM_SPENDING,
                payload: {
                    price,
                    catagory,
                    discription,
                    data: moment(new Date()).format('DD/MM/YYYY')
                }
            })
        } else if (expense === 'Income') {
            await dispatch({
                type: ADD_ITEM_INCOME,
                payload: {
                    price,
                    catagory,
                    discription,
                    data: moment(new Date()).format('DD/MM/YYYY')
                }
            })
        }

        setIsOpen(!isOpen)
    }
    return (
        <View>
                <View style={styles.action}>
                    <WheelPickerExpo 
                        height={300}
                        width={300}
                        initialSelectedIndex={3}
                        items={
                            expense === 'Spending'
                                ? spendingData.map((item : IPicker) => ({ label: item.label, value: item.value }))
                                : incomeData.map((item: IPicker) => ({ label: item.label, value: item.value }))
                        }
                        onChange={({ item }) => setCatagory(item.value)} />
                </View>
                <View style={styles.line}/>
                <View style={styles.action}>
                        <TextInput 
                        placeholder="Сумма"
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType='numeric'
                        onChangeText={(val) => setPrice(parseInt(val))}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.action}>
                        <TextInput 
                        placeholder="Описание..."
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => setDiscription(val)}
                    />
                </View>
                <View style={styles.line}/>
                <LinearGradient
                    style={styles.styledButton}
                    colors={['#FF166F', '#FF2D2F']}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                        <TouchableOpacity
                            onPress={addItem}
                            // fill
                        >
                            <Text style={{ color: 'white', fontSize: 20}}>Добавить</Text>
                        </TouchableOpacity>
                </LinearGradient>
        </View>
    )
}
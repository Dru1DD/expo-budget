import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { IState } from '../redux/reducer/rootReducer'
import { chartMain as styles } from '../styles/components/chartMain'

interface ChartProps {
    isSpending: boolean
}

export const ChartMain: FC<ChartProps> = ({ isSpending }) => {

    const { spendingItems, incomeItems } = useSelector((state: IState) => state)
    
    const addingSpendingData = () => {
        if(spendingItems.length >= 0) {
            if(spendingItems.length === 0) {
                return [...spendingItems.map(item => item.price), 0, 0, 0, 0, 0, 0 ]
            } else if (spendingItems.length === 1) {
                return [...spendingItems.map(item => item.price), 0, 0, 0, 0, 0]
            } else if (spendingItems.length === 2) {
                return [...spendingItems.map(item => item.price), 0, 0, 0, 0]
            } else if (spendingItems.length === 3) {
                return [...spendingItems.map(item => item.price), 0, 0, 0]
            } else if(spendingItems.length === 4) {
                return [...spendingItems.map(item => item.price), 0, 0]
            } else if (spendingItems.length === 5) {
                return [...spendingItems.map(item => item.price), 0]
            } else return spendingItems.map(item => item.price)
            
        } else return [ 0, 0, 0, 0, 0, 0, 0]
    }

    const addingIncomeData = () => {
        if(incomeItems.length >= 0) {
            if(incomeItems.length === 0) {
                return [...incomeItems.map(item => item.price), 0, 0, 0, 0, 0, 0 ]
            } else if (incomeItems.length === 1) {
                return [...incomeItems.map(item => item.price), 0, 0, 0, 0, 0]
            } else if (incomeItems.length === 2) {
                return [...incomeItems.map(item => item.price), 0, 0, 0, 0]
            } else if (incomeItems.length === 3) {
                return [...incomeItems.map(item => item.price), 0, 0, 0]
            } else if(incomeItems.length === 4) {
                return [...incomeItems.map(item => item.price), 0, 0]
            } else if (incomeItems.length === 5) {
                return [...incomeItems.map(item => item.price), 0]
            } else return [...incomeItems.map(item => item.price)]
        } else return [ 0, 0, 0, 0, 0, 0, 0]
    }
    const [ spendingData, setSpendingData ] = useState<number[]>(addingSpendingData)
    const [ incomeData, setIncomeData ] = useState<number[]>(addingIncomeData)

    

    useEffect(() => {
        setIncomeData(addingIncomeData)
        setSpendingData(addingSpendingData)
    }, [])
    return (
        <View style={styles.container}>
            {
                isSpending ? (
                    <LineChart 
                        data={{
                            labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
                            datasets: [{
                                data: spendingData,
                                strokeWidth: 2 
                            }]
                        }}
                        chartConfig={{
                          backgroundColor: '#1E1EEC',
                          backgroundGradientFrom: '#1a1aec',
                          backgroundGradientTo: '#1f1fec',
                          decimalPlaces: 2,
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          style: {
                            borderRadius: 16
                          }
                        }}
                        bezier
                        width={350}
                        height={175}
                        style={{
                            borderRadius: 10,
                            shadowColor: "#1e1eec",
                            shadowOffset: {
                            	width: 0,
                            	height: 1,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,

                            elevation: 2,
                        }}
                    />
                ) : (
                    <LineChart 
                        data={{
                            labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
                            datasets: [{
                                data: incomeData,
                                strokeWidth: 2 
                            }]
                        }}
                        chartConfig={{
                            backgroundColor: '#1E1EEC',
                            backgroundGradientFrom: '#1a1aec',
                            backgroundGradientTo: '#1f1fec',
                            decimalPlaces: 2, 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                              borderRadius: 16
                            }
                        }}
                        bezier
                        width={350}
                        height={175}
                        style={{
                            borderRadius: 10,
                            shadowColor: "#1e1eec",
                            shadowOffset: {
                            	width: 0,
                            	height: 1,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,

                            elevation: 2,
                        }}
                    />
                )
            }
            {/* <LineChart 
                data={}
            /> */}
        </View>
    )
}
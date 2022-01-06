import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { CardItems } from './CardItems'
import { ChartMain } from './ChartMain'
import { mainScreen as styles } from '../styles/mainScreen'
import { IState, IIncome } from '../redux/reducer/rootReducer'

export const IncomeFooter: FC = () => {

    const { total_income, incomeItems } = useSelector((state: IState) => state)
    return (
        <Animatable.View animation="fadeInUp">
                    <View style={styles.footerStats}>
                            <View style={styles.statsHeader}>
                                <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 20}}>
                                    <Text style={styles.priceHeader}>
                                        {total_income}
                                    </Text>
                                    <Text style={styles.priceSubtitle}>За всё время</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                                    <Text style={styles.statisticHeader}>Статистика</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.chart}>
                            <ChartMain isSpending={false}/>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsHeader}>Операции</Text>
                            <Text style={styles.cardsSubTitle}>Сегодня</Text>
                            <ScrollView style={{ width: '100%', alignSelf: 'center' }}>
                                {
                                    incomeItems.map((item: IIncome, index: number) => (
                                        <CardItems 
                                            price={item.price}
                                            catagory={item.catagory}
                                            discription={item.discription}
                                            data={item.data}
                                            isSpending={false}
                                            key={index}
                                        />
                                    ))
                                }
                            </ScrollView>
                        </View>
        </Animatable.View>
    )
}
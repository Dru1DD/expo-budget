import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import { ChartMain } from './ChartMain'
import { CardItems } from './CardItems'
import * as Animatable from 'react-native-animatable'

import { mainScreen as styles } from '../styles/mainScreen'
import { IState, ISpending } from '../redux/reducer/rootReducer'

export const SpendingFooter: FC = () => {

    const {spendingItems, total_spending} = useSelector((state: IState) => state)
    return (
        <Animatable.View animation="fadeInUp">
            <View style={styles.footerStats}>
                            <View style={styles.statsHeader}>
                                <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 20}}>
                                    <Text style={styles.priceHeader}>
                                        {total_spending}
                                    </Text>
                                    <Text style={styles.priceSubtitle}>За всё время</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                                    <Text style={styles.statisticHeader}>Статистика</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.chart}>
                            <ChartMain isSpending={true} />
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsHeader}>Операции</Text>
                            <Text style={styles.cardsSubTitle}>Сегодня</Text>
                            <ScrollView style={{ width: '100%', alignSelf: 'center' }}>
                                {
                                    spendingItems.map((item: ISpending, index: number) => (
                                            <CardItems 
                                                price={item.price}
                                                catagory={item.catagory}
                                                discription={item.discription}
                                                data={item.data}
                                                isSpending={true}
                                                key={index}
                                            />
                                        ))
                                }
                            </ScrollView>
                        </View>
        </Animatable.View>
    )
}
import React, { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChartMain } from './ChartMain'
import { CardItems } from './CardItems'
import { SwipeListView } from 'react-native-swipe-list-view'
import * as Animatable from 'react-native-animatable'

import { mainScreen as styles } from '../styles/mainScreen'
import { IState, ISpending } from '../redux/reducer/rootReducer'
import { REMOVE_ITEM_SPENDING } from '../redux/action/actionTypes'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamlist } from '../types/navigationTypes'

type spendingFooterProp = StackNavigationProp<MainStackParamlist, 'MainScreen'>


export const SpendingFooter: FC = () => {

    const {spendingItems, total_spending} = useSelector((state: IState) => state)

    let spendingList = spendingItems.map((item: ISpending, index: number) => { 
        return {
            key: `${index}`, item: item
        }})


    console.log(spendingItems)
    const dispatch = useDispatch()

    const deleteItems: (rowMap: any, rowKey: string, val: string) => void = async (rowMap, rowKey, val) => {
        await dispatch({
            type: REMOVE_ITEM_SPENDING,
            payload: val
        })
        closeRow(rowMap, rowKey);
    }

    const navigation = useNavigation<spendingFooterProp>()

    const closeRow = (rowMap: any, rowKey: any) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const renderItem = (data: any) => {
        const { item } = data.item

        return (
            <CardItems 
                price={item.price}
                catagory={item.catagory}
                discription={item.discription}
                data={item.data}
                isSpending={true}
            />
        )
    }

    const renderHiddenItem = (data: any, rowMap: any) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteItems(rowMap, data.item.key, data.item.item.discription)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    )

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
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('AnalysisScreen')}
                                    >
                                        <Text style={styles.statisticHeader}>Статистика</Text>
                                    </TouchableOpacity>
                                    
                                </View>

                            </View>
                        </View>
                        <View style={styles.chart}>
                            <ChartMain isSpending={true} />
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsHeader}>Операции</Text>
                            <Text style={styles.cardsSubTitle}>Сегодня</Text>
                            <SwipeListView
                                data={spendingList}
                                renderItem={renderItem}
                                renderHiddenItem={renderHiddenItem}
                                rightOpenValue={-75}
                                previewRowKey={'0'}
                                previewOpenValue={-40}
                                previewOpenDelay={3000}
                            />
                        </View>
        </Animatable.View>
    )
}
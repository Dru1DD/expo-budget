import React, { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import * as Animatable from 'react-native-animatable'
import { CardItems } from './CardItems'
import { ChartMain } from './ChartMain'
import { mainScreen as styles } from '../styles/mainScreen'
import { IState, IIncome } from '../redux/reducer/rootReducer'
import { REMOVE_ITEM_INCOME } from '../redux/action/actionTypes'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamlist } from '../types/navigationTypes'

type incomeFooterProp = StackNavigationProp<MainStackParamlist, 'MainScreen'>

export const IncomeFooter: FC = () => {

    const { total_income, incomeItems } = useSelector((state: IState) => state)

    let incomeList = incomeItems.map((item: IIncome, index: number) => {
        return {
            key: `${index}`,
            item: item
        }
    })

    const dispatch = useDispatch()

    const navigation = useNavigation<incomeFooterProp>()

    const deleteItems: (rowMap: any, rowKey: string, val: string) => void = async (rowMap, rowKey, val) => {
        await dispatch({
            type: REMOVE_ITEM_INCOME,
            payload: val
        })
        closeRow(rowMap, rowKey);
    }

    const closeRow = (rowMap: any, rowKey: any) => {
        if(rowMap[rowKey]) {
            rowMap[rowKey].closeRow()
        }
    }
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
                                        {total_income}
                                    </Text>
                                    <Text style={styles.priceSubtitle}>???? ?????? ??????????</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('AnalysisScreen')}
                                    >
                                        <Text style={styles.statisticHeader}>????????????????????</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        <View style={styles.chart}>
                            <ChartMain isSpending={false}/>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsHeader}>????????????????</Text>
                            <Text style={styles.cardsSubTitle}>??????????????</Text>

                            <SwipeListView
                                data={incomeList}
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
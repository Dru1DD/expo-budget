import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ISpending } from '../redux/reducer/rootReducer'

import { cardItems as styles } from '../styles/components/cardItems'

interface CardItemsProps {
    isSpending: boolean
}
export const CardItems: FC<ISpending & CardItemsProps> = ({
    isSpending,
    price,
    discription,
    catagory,
    data
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.discription}>{`${discription}`}</Text>
                <Text style={styles.catagory}>{`${catagory}`}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.price}>{isSpending ? `- $ ${price}` : `$ ${price}`}</Text>
                <Text style={styles.data}>{`${data}`}</Text>

            </View>
        </View>
    )
}
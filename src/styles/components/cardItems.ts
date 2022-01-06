import { StyleSheet } from 'react-native'

export const cardItems = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#464646',
        borderRadius: 10
    },
    left: {
        flex: 1,
        alignItems: 'flex-start'
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    discription: {
        color: 'white',
        marginLeft: 10,
        fontSize: 24
    },
    catagory: {
        marginLeft: 10,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.5)'
    },
    price: {
        color: 'white',
        marginRight: 10,
        fontSize: 24
    }, 
    data: {
        marginRight: 10,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.5)'
    }
})
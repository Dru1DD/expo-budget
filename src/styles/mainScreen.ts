import { StyleSheet } from 'react-native'

export const mainScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#262626',
    },
    headerText: {
        flex: 1,
        alignItems: 'flex-start'
    },
    headerAdd: {
        flex: 1,
        alignItems: 'flex-end'
    },
    headerGreeting: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '100',
        color: 'white'
    },
    headerName: {
        marginLeft: 20,
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // backgroundColor: '#363636',
        // shadowColor: "#000",
        // shadowOffset: {
        // 	width: 0,
        // 	height: 9,
        // },
        // shadowOpacity: 0.50,
        // shadowRadius: 12.35,

        // elevation: 19,
    },
    footerHeader: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginLeft: 20,
    },
    footerHeaderText: {
        marginLeft: 10,
        marginRight: 10,
        color: 'white',
        fontSize: 18
    },
    text: {
        color: 'white'
    },
    activeHeader: {
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    footerMain: {
        flex: 2
    },
    footerStats: {
        flex: 1,
        alignSelf: 'flex-start'
    },
    statsHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    priceHeader: {
        color: 'white',
        fontSize: 28
    },
    priceSubtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.5)'
    },
    statisticHeader: {
        color: 'white'
    },
    chart: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10,
    },
    cards: {
        flex: 4
    },
    cardsHeader: {
        fontSize: 32,
        color: 'white',
        marginLeft: 20
    },
    cardsSubTitle: {
        fontSize: 18,
        color: 'white',
        marginLeft: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})
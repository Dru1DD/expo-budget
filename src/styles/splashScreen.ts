import { StyleSheet } from 'react-native'

export const splashScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 33,
        height: 75,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    mainPart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 70,
        color: 'white',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }, 
    btnText: {
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    text: {
        color: 'white'
    }
})
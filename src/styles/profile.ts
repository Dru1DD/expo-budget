import { StyleSheet } from "react-native";

export const profile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    footer: {
        flex: 1,
        backgroundColor: '#262626',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    title: {
        width: '100%',
        height: 33,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 33,
        textAlign: 'center',
        color: 'white'
    },
    textBox: {
        width: '100%',
        height: 200
    },
    text: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: 'white'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    exit: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    exitText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        width: 300,
        height: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 20,
        color: 'white'
    },
    textValue: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 20,
        color: 'white'
    },
    styledButton: {
        width: 220,
        height: 59,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    logoText: {
        width: 100,
        height: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        color: '#fff'
    },
    line: {
        width: 105,
        borderWidth: 0.25,
        borderColor: '#fff'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#464646',
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
    modalText: {
        width: '100%',
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10
    },
    styledText: {
        width: 99,
        height: 23,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        color: '#fff'
    }
})
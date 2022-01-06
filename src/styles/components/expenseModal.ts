import { StyleSheet } from 'react-native'

export const expenseModal = StyleSheet.create({
    comments: {
        fontSize: 19,
        lineHeight: 26,
        fontFamily: "Roboto",
        fontWeight: "normal",
        textAlign: "center"
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: "#9CA3AF",
        marginVertical: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a'
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
})
import { StyleSheet, Dimensions, PLatform } from 'react-native'

export const singUp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#363636",
        minHeight: Math.round(Dimensions.get('window').height)
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 50,
        flexDirection: "row"
    },
    footer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 18
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        paddingBottom: 5      
    },
    actionError: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#fff",
        fontSize: 16,
        justifyContent: 'center',
        paddingTop: 10
    },
    errorMsg: {
        color: "#FF0000",
        fontSize: 14,
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signUp: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    },
    headerTitle: {
        width: 150,
        height: 75,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 40,
        lineHeight: 33,
        textAlign: "center",
        color: "#000"
    },
    title: {
        width: 173,
        height: 33,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 33,
        color: "#fff",
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 35
    },
    styledButton: {
        width: 240,
        height: 59,
        marginTop: 20,
        backgroundColor: "red",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    buttonText: {
        width: 130,
        height: 23,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 20,
        textAlign: "center",
        color: "#fff"
    },
    logoText: {
        height: 30,
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 15,
        color: "white",
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 'auto',
      },
      logoSubtitle: {
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 17,
        flexDirection: 'row',
        alignSelf: 'center',
        color: "white"
      },
      icon: {
        width: 48,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        justifyContent: 'center',
        alignItems: 'center'
      }
})
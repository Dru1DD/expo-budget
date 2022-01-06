import { StyleSheet } from "react-native";

export const chartMain = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        backgroundColor: 'blue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "blue",
        shadowOffset: {
        	width: 5,
        	height: 9,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5,

        elevation: 19,
    }
})
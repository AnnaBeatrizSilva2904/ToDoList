import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#e57d90',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f99aaac0',
    },
    itemToBuy: {
        color: "#fff",
        fontSize: 24,
        textDecorationLine: 'none',
    },
    itemBought: {
        color: "#fff",
        fontSize: 24,
        textDecorationLine: 'line-through',
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: '#fc6998',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
    },
});
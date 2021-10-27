import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ProgressBar from "../ProgressBar/ProgressBar";
import heart from "../../../assets/images/heart.png"

const Header = ({ progress, lives }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />
            <Image source={heart} style={styles.icon} />
            <Text style={styles.lives}>{lives}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignSelf: "center",
    },
    icon:{
        height:30,
        width:30,
        resizeMode: "contain",
        marginHorizontal: 10,
    },
    lives:{
        color:"red",
        fontWeight: "bold",
        fontSize: 18,
    }
});

export default Header;
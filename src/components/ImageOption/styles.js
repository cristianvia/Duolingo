import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    optionContainer: {
        //border
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: 'lightgrey',
        borderRadius: 10,

        //size
        width: '48%',
        height: '48%',

        alignItems: "center",

        //spacing
        padding: 10,
    },

    selectedContainer: {
        backgroundColor: '#DDF4FE',
        borderColor: '#81D5FE'
    },

    optionImage: {
        width: "100%",
        flex: 1,
    },

    optionText: {
        fontWeight: "bold",
        color:"black",
    },

    selectedText:{
        color:"#40BEF7",
        fontWeight: "bold",
    },
});

export default styles;
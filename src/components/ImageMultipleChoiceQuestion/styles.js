import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'stretch',

    },

    optionsContainer: {
        width: '100%',
        flex: 1,

        flexDirection: 'row',
        //fit all childs in one row, everything it doesn't fit in one row fit it in the next line
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
    },

});

export default styles;
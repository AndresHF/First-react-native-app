import {StyleSheet} from 'react-native';

let bgColor = 'black';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainGrid: {
        flex: 15,
    },
    header: {
        flex: 2,
        padding: 20,
        fontSize: 35,
        textAlign: 'center',
        backgroundColor: bgColor,
        color: 'white',
        fontFamily: 'sans-serif-condensed'
    },
    base: {
        fontSize: 20,
        padding: 5,
        textAlign: 'center',
        backgroundColor: 'pink',
        color: 'black',
    },
    col: {
        margin: 5
    },
    console: {
        height: 60, 
        backgroundColor: 'lightgray',
        fontFamily: 'monospace',
        fontSize: 30,
        textAlign: 'right',
        paddingRight: 20,
        paddingTop: 10,
    },
    footer: {
        flex: 0,
        padding: 35,
        backgroundColor: bgColor,
        color: 'yellow',
        textAlign: 'right'

    }
});

export {styles, bgColor}; 
import { Text, View } from 'react-native';
import React from 'react';

const Header = ({title}) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {title}
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        elevation: 9,
        position: 'relative'

    },
    textStyle: {
        fontSize: 30,
        fontWeight:"bold"
    }
}

export default Header;
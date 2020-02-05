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
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 5,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;
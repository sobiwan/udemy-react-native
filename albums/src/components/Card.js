/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';

// eslint-disable-next-line no-undef
export default Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1, 
        borderRadius: 2, 
        borderColor: '#ddd',
        borderBottowWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadownOpacity: 0.1,
        shadowRadius: 2, 
        elevation: 1, 
        marginLeft: 5, 
        marginRight: 5, 
        marginTop: 10 
    }
};

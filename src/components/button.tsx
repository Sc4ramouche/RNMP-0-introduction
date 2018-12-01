import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type State = {};
type Props = {
    title: string,
    onPress: () => void,
};
export class Button extends Component<Props, State> {
    render() {
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                style={styles.container}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#CEDB56',
        marginBottom: 20
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontFamily: 'oswald-bold',
        color: 'white'
    }
});
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.subtitle}</Text>
            </View>
        );
    }
}

export const FunctionalHeader = ({ style, title, subtitle}) => {
    return (
        <View style={style}>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    );
};
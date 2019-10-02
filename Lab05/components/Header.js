import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string,
    }
    static defaultProps = {
        title: 'Default Title',
        subTitle: 'Default SubTitle'
    }
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
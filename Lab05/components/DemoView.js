import React, { Component } from 'react';
import { View } from 'react-native';

export default class DemoView extends Component {
    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}
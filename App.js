/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class ListName extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                {
                    this.props.name.map(function (name) {
                        return <Text>{name}</Text>
                    })
                }
            </View>
        );
    }
}


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true}
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            })
        }, 1000);
    }


    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}

class Movie extends Component {
    render() {
        return (
            <View style={styles.movie}>
                <Image style={{width: 200, height: 100}} source={{uri:this.props.url}}/>
                <Text>{this.props.name}</Text>
                <Text>{this.props.year}</Text>
            </View>
        );
    }
}

const MOVIE_DATA = [
    {
        title: "标题",
        year: "2018",
        url: "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=3b03c837572c11dfcadcb771024e09b5/ae51f3deb48f8c54cd34cafb3a292df5e1fe7f7a.jpg"
    }
];

export default class App extends Component<Props> {

    render() {
        const data = MOVIE_DATA[0];
        return (
            <View style={styles.container}>
                <Movie url={data.url} name={data.title} year={data.year}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    img: {
        width: 200,
        height: 300,
    },
    movie: {
        flex: 1,
        flexDirection: 'row'
    }
});

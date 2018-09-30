import { Button } from 'react-native';
import React, { Component } from 'react';
import {  Col } from 'react-native-easy-grid';
import { del, convert } from "../functions/logic";
import {styles} from "../styles/stylesheet";

class ConvertButton extends Component{

    render(){
        const {id, output, handler, from, to} = this.props;

        return (
            <Col style={styles.col}>
                <Button color="green" title={id} 
                        onPress={() => handler((x, from, to) => convert(x, from, to))(output, from, to)} 
                />
            </Col>
        );
    }
}

class DelButton extends Component{

    render(){
        const {id, output, handler} = this.props;
        return (
            <Col style={styles.col}>
                <Button color="red" title={id}
                        onPress={() => handler(x => x[0] === "W" ? "0" : del(x))(output)}                                             
                />
            </Col>
        );
    }
}

export { ConvertButton, DelButton };
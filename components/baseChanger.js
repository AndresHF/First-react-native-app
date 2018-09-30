import React, { Component } from 'react';
import { Col, Row } from 'react-native-easy-grid';
import { Button, Text } from 'react-native';
import {styles} from "../styles/stylesheet";

class BaseChanger extends Component {

    render(){
        const { val, handler} = this.props;
        return (
            <Col style={styles.col}>
                <Row>
                    <Col style={styles.col}>
                        <Button color="purple" 
                                title = "+" 
                                onPress = {() => handler(x => x !== 16 ? parseInt(x) + 1 : x)(val)}/>
                    </Col>

                    <Col style={styles.col}><Text style={styles.base}>{val}</Text></Col>

                    <Col style={styles.col}>
                        <Button color="purple" 
                                title = "-" 
                                onPress = {() => handler(x => x !== 2 ? parseInt(x) - 1 : x)(val)}/>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export { BaseChanger };
import React, {Component} from 'react';
import {Button} from 'react-native';

class DigitButton extends Component{

    render(){
        const {value, id, handler} = this.props;
        return (
            <Button 
                title = {value} 
                onPress = {() => handler(id)} 
            />
        );
    }

}

export {DigitButton};
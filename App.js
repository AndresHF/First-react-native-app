import React from 'react';
import { Text, View } from 'react-native';
import { DigitButton } from './components/digitButton';
import { ConvertButton, DelButton } from './components/actionButtons';
import { BaseChanger } from './components/baseChanger';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from "./styles/stylesheet";
import { filteredOutput, dotStart } from "./functions/logic";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      digitButtons : [[7,8,9], [4,5,6] ,[1,2,3], [0,"."], ["A", "B", "C", "D", "E", "F"]],
      output : "0",
      from : 10,
      to : 16,
      converted : false
    };
  }
  handler = (id) => {
    const {digitButtons, output, converted, from} = this.state;
    this.setState({
      
      output:  !converted ?  filteredOutput(digitButtons, from, id, output) : 
                             dotStart(filteredOutput(digitButtons, from, id)),
      converted: !converted ? converted : !converted,
    });
  }
  actionHandler = f => (s, from = "", to = "") => {
    this.setState({
       output: f(s, from, to),
       converted: true 
    });
  }
  actionHandler2 = f => x => {
    this.setState ({
      output: f(x),
      converted:  false
    });
  }
  baseHandler1 = f => s => {
    this.setState ({
      from: f(s)
    });
  }
  baseHandler2 = f => s => {
    this.setState ({
      to: f(s)
    });
  }

  render() {
    const {digitButtons, output, from, to, converted} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Base Converter</Text>
        
        <Grid style={styles.mainGrid}>

          <Text style={styles.console}>{output}</Text>
          {digitButtons.map((c, i) =>{
            return  (<Row key={i+10}>
                        {c.map(d => {
                          return (<Col style={styles.col} key={(d + 20)}>
                                    <DigitButton style = {styles.button} 
                                                 value = {d + ""} 
                                                 key = {d} 
                                                 id = {d}
                                                 handler = {this.handler}
                                                 />
                                  </Col>);
                        })}
                    </Row>);// 
          })}
          <Row>
            <DelButton   id = {"<<<DEL"}
                         output = {output} 
                         handler = {this.actionHandler2}
                         />
          
          <ConvertButton id = {"Convert"}
                         output = {output} 
                         handler = {this.actionHandler}
                         from = {from}
                         to = {to}
                         />
          </Row>
          <Row>
            <BaseChanger val={from} handler={this.baseHandler1}/>
            <BaseChanger val={to} handler={this.baseHandler2}/>
          </Row>               
        </Grid>
        <Text style={styles.footer}>by JaGUaR´s</Text>
      </View>
    );
  }
}


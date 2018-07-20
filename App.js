import React, { Component } from 'react';
import {
  Platform,StyleSheet,Text,View,TextInput,TouchableOpacity
} from 'react-native';

export default class App extends Component<Props> {
 constructor(props){
   super(props);
   this.state={
     fname:'',
     lname:'',
   }
 }

  myfun=()=>{
    const {fname,lname} = this.state;
    alert(fname);
    alert(lname);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          EasyCode Sardar
        </Text>

        <TextInput placeholder="First Name"
        style={styles.textbox}
        onChangeText={
          fname => this.setState({fname})
        }></TextInput>

        <TextInput placeholder="last name"
        style={styles.textbox}
        onChangeText={
          lname => this.setState({lname})
        }></TextInput>

        <TouchableOpacity style={styles.btn} onPress={this.myfun}>
        <Text style={styles.txt}>Click</Text>
        </TouchableOpacity>


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
  textbox:{
    borderWidth:1,
    borderColor:'#ccc',
    width:250,
    padding:10, margin:5
  },
  txt:{
    textAlign:'center',color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  btn:{
    backgroundColor:'red',width:250,
    padding:10,
    margin:10
  }

});

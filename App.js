import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

 class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: '1', nome: 'Mateus', idade: 19, email:'adamomateus478@gmail.com'},
        {id: '2', nome: 'Marcos', idade: 29, email:'marcos78@gmail.com'},
        {id: '3', nome: 'André', idade: 22, email:'andré48@gmail.com'},
        {id: '4', nome: 'Lucas', idade: 31, email:'lucas28@gmail.com'},
        {id: '5', nome: 'Pedro', idade: 27, email:'teco@gmail.com'},
        {id: '6', nome: 'Luiz', idade: 45, email:'luiz@gmail.com'},
      ]
    }
  }

 render(){
  return (
    <View style={styles.container}>

        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/> }
        />

    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  areaPessoa:{
    backgroundColor: 'grey',
    height: 200,
    marginBottom: 15,
    marginTop: 30,
  },
  textoPessoa:{
    color: 'white',
    fontSize: 20,
  },
})

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
      <Text style={styles.textoPessoa}> Idade: {this.props.data.idade} </Text>
      <Text style={styles.textoPessoa}> E-mail: {this.props.data.email} </Text>
      </View>
    )
  }
}
import React, { Component } from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'
import axios from 'axios'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Login Page'
  }

  login = e => {
    e.preventDefault()

    console.log(this.state.username, this.state.password)

    const method = "POST"
    const mode = 'cors'
    const headers = { 'Accept': 'application/json'}
    let body = new FormData()
    body.append('username', this.state.username)
    body.append('password', this.state.password)
    // let body = JSON.stringify({
    //   username: this.state.username,
    //   password: this.state.password
    // })

    console.log({method, headers, body})

    fetch('https://192.168.9.10:8080/login', {method, mode, headers, body})
      .then(res => res.json())
      .then(tok => {
        if (tok.message === 'Unauthorized') {
          console.log('err: ', tok.message)
        } else {
          console.log(tok)
        }
      })
      .catch(err => {
        console.log(err)
        return
      })

    // axios.post('https://localhost:8080/login', {
    //   username: this.state.username,
    //   password: this.state.password
    // })
    //   .then(res => res.json())
    //   .then(tok => {
    //     if (tok.message === 'Unauthorized') {
    //       console.log('err: ', tok.message)
    //     } else {
    //       console.log(tok)
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     return
    //   })

    this.setState({username: '', password: ''})
  }

  render() {
    // const { navigate } = this.props.navigation

    return (
      <View>        
        <TextInput
          style={{
            height: 40, 
            marginTop: 20, 
            marginBottom: 10, 
            marginLeft: 10, 
            marginRight: 10,
            padding: 5
          }}
          placeholder="Username" 
          onChangeText={username => this.setState({ username })}
        />

        <TextInput
          style={{
            height: 40, 
            marginTop: 10, 
            marginBottom: 10, 
            marginLeft: 10, 
            marginRight: 10,
            padding: 5
          }}
          secureTextEntry={true}
          placeholder="Password" 
          onChangeText={password => this.setState({ password })}
        />

        <Button
          onPress={this.login}
          title="Login"
        />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
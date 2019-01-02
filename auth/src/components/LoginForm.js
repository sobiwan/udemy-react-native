import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Loading } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error:'', loading: true})
        firebase.auth().signInWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
             .then(this.onLoginSuccess.bind(this))
             .catch(this.onLoginFail.bind(this))
         });
    }

    onLoginSuccess() {
        this.setState({ 
            email:'',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail(e) {
        this.setState({ error: e.message, loading: false })
    }

    renderButton(){
        if (this.state.loading) {
            return <Loading size='small' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        )
    }

    render (){
        const { errorTextStyle } = styles
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:" 
                        placeholder='user@email.com'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password:'
                        placeholder='password'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={errorTextStyle} >
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20, 
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;

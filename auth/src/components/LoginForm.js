import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    render (){
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

                <CardSection>
                    <Button>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;

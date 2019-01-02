import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Loading, CardSection } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component { 

    state = { auth: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCdNX_KUsz_5lK7BRNjhZnkLBQL_ciiMxc",
            authDomain: "auth-384b4.firebaseapp.com",
            databaseURL: "https://auth-384b4.firebaseio.com",
            projectId: "auth-384b4",
            storageBucket: "auth-384b4.appspot.com",
            messagingSenderId: "1034747444918"
          });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ auth: true });
            } else {
                this.setState({ auth: false });
            }
        });
    }

    renderContent() {
        switch (this.state.auth){
            case true:
             return (
                 <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}> 
                     Log Out 
                    </Button>
                </CardSection>)
            case false:
             return <LoginForm />
            default:
             return (
                 <View style={styles.loading}>
                    <Loading size='large' />
                 </View>
             )
        }        
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    loading: {
        paddingTop: '10%'
    }
}

export default App; 

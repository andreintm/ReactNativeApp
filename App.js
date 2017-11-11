/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//
// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// import firebase from 'firebase';
// import {Header, Button, Spinner} from './src/components/index';
// import LoginForm from './src/components/LoginForm';
//
// export default class App extends Component {
//     state = {
//         loggedIn: null
//     };
//
//     componentWillMount() {
//         firebase.initializeApp({
//             apiKey: "AIzaSyD_tLd-2Wg_ggFBCMylTejfc34p0tTPAVM",
//             authDomain: "react-f6cfd.firebaseapp.com",
//             databaseURL: "https://react-f6cfd.firebaseio.com",
//             projectId: "react-f6cfd",
//             storageBucket: "react-f6cfd.appspot.com",
//             messagingSenderId: "640136303440"
//         });
//
//         firebase.auth().onAuthStateChanged((user) => {
//             if(user) {
//                 this.setState({ loggedIn: true });
//             } else {
//                 this.setState({ leggedIn: false });
//             }
//         });
//     }
//
//     renderContent() {
//         switch (this.state.loggedIn) {
//             case true:
//                 return (
//                     <Button onPress={() => firebase.auth().signOut()}>
//                         Log out
//                     </Button>
//                 );
//             case false:
//                 return <LoginForm />;
//             default:
//                 return <Spinner size="large"/>;
//         }
//     }
//
//     render() {
//         return (
//             <View>
//                 <Header headerText="Authentication"></Header>
//                 { this.renderContent() }
//             </View>
//         );
//     }
// }

import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from "./src/components";
import LibraryList from "./src/components/LibraryList";

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex:1 }}>
                <Header headerText='Tech Stack'></Header>
                <LibraryList></LibraryList>
            </View>
        </Provider>
    );
};

export default App;

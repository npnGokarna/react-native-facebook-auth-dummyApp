import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import * as Action from '../action';

class AuthScreen extends Component{

componentDidMount(){
  this.props.facebookLogin();
  this.onAuthComplete(this.props);
  //only for test purposes
  //AsyncStorage.removeItem('fb_token') frmoves fb_token from Async Storage
  // so that every time the app is reloaded, it will ask for facebook authentication
  AsyncStorage.removeItem('fb_token');
}
//whenever the component is about to re-render
componentWillReceiveProps(nextProps){
  this.onAuthComplete(nextProps);

}

onAuthComplete(props){

  if(props.token){
    this.props.navigation.navigate('deckScreen');
  }

}

  render(){

    return(
      <View>
        <Text style = {{ paddingTop: 100}}>Display Something when user cancels login screen!!</Text>
      </View>

    );

  }
}

const mapStateToProps = ({auth}) =>{

  return {token: auth.token};
}



export default connect(mapStateToProps, Action)(AuthScreen);

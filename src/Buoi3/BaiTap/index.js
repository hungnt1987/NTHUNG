import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default class BaiTap extends Component {
  
  constructor(props) {
    super(props);
    this.state = { uri : require ('./Images/love.png') };
  }

  onPressButtonAngry = () => {
    this.setState({
      uri: require('./Images/angry.png')
    });
  };

  onPressButtonLike = () => {
    this.setState({
      uri: require('./Images/like.png')
    });
  };

  onPressButtonLove = () => {
    this.setState({
      uri: require('./Images/love.png')
    });
  };

  onPressButtonSad = () => {
    this.setState({
      uri: require('./Images/sad.png')
    });
  };

  onPressButtonCare = () => {
    this.setState({
      uri: require('./Images/care.png')
    });
  };


  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}> Bạn đang cảm thấy như thế nào? </Text>
        <Image 
            style = {styles.bigIcon} 
            source={this.state.uri}
        />
        <View style = {styles.smallIcon}>
          <TouchableOpacity onPress = {this.onPressButtonAngry}>
              <Image style = {styles.image} source = {require ('./Images/angry.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress = {this.onPressButtonLike}>
              <Image style = {styles.image} source = {require ('./Images/like.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress = {this.onPressButtonLove}>
              <Image style = {styles.image} source = {require ('./Images/love.png')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress = {this.onPressButtonSad}>
              <Image style = {styles.image} source = {require ('./Images/sad.png')}/> 
          </TouchableOpacity>
          
          <TouchableOpacity onPress = {this.onPressButtonCare}>
              <Image style = {styles.image} source = {require ('./Images/care.png')}/>
          </TouchableOpacity>
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'whie',
  },
  smallIcon:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row', 
    width: '90%',
    height: 60,
    
  },
  text :{
    color: 'black',
    fontSize: 20,
  },
  image : {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  bigIcon : {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});








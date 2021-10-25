import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {blackwidow, captain, flash, ironman, spiderman, strange, suppergirl, wanda,wonderwoman,yasuo} from './images'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="user-plus" size={22} color="black" />;
const myUsers = <Icon name="users" size={22} color="black" />;
export default class BaiTap extends Component {
  listFilmInfo = [
    

    {
      title: "Strange",
      icon: strange,
      subTitle:
        '15 bạn chung',
      
    },
    {
      title: "Kara",
      icon: suppergirl,
      subTitle:
        '15 bạn chung',
      
    },
    {
      title: "Diana",
      icon: wonderwoman,
      subTitle:
        '15 bạn chung',
      
    },

    {
      title: "Natasha",
      icon: blackwidow,
      subTitle:
        '15 bạn chung',
      
    },
    {
      title: "Strange",
      icon: strange,
      subTitle:
        '15 bạn chung',
      
    },
  ];
  listFilmInfoRow = [
    {
      title: "Wanda",
      icon: wanda,
      subTitle:
        '15 bạn chung',
      
    },

    {
      title: "Yasuo",
      icon: yasuo,
      subTitle:
        '15 bạn chung',
      
    },
    {
      title: "Captain",
      icon: captain,
      subTitle:
        '15 bạn chung',
      
    },
    {
      title: "Flash",
      icon: flash,
      subTitle:
        '15 bạn chung',
      
    },

    {
      title: "Wanda",
      icon: wanda,
      subTitle:
        '15 bạn chung',
      
    },

    {
      title: "Yasuo",
      icon: yasuo,
      subTitle:
        '15 bạn chung',
      
    },
  ];

  renderListFilmInfoRow = () => {
    return this.listFilmInfoRow.map((Film, index) => (
      <View
        
        key={index}
        style={styles.infoRow}>
        <Image source={Film.icon} style={styles.icon} />
        <View style={styles.infoContentRow}>
          <Text>{Film.title}</Text>
        </View>
        
      </View>
    ));
  };

  renderListFilmInfo = () => {
    return this.listFilmInfo.map((Film, index) => (
      <View
        key={index}
        style={[styles.info, {backgroundColor: '#b2adad'}, {marginVertical: 1}]}>
        <Image source={Film.icon} style={styles.icon} />
        <View style={styles.infoContent}>
          <Text>{Film.title}</Text>
          <Text>{Film.subTitle}</Text>
        </View>
        <View style = {{alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, marginHorizontal: 30}}>
            <TouchableOpacity>
              <Text style = {styles.addFriends}>Kết bạn</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  render() {
    return (
     <View style={styles.container}>
        <View>
            
            <Text style = {styles.header}>{myUsers} Danh sách tìm kiếm gần đây</Text>
            <ScrollView 
            horizontal={true}
            style={styles.scrollContainerRow}
            contentContainerStyle={styles.scrollContentRow}>
            {this.renderListFilmInfoRow()}
           
            </ScrollView>
        </View>

        <View style={styles.container}>
            <Text style = {styles.header}>{myIcon} Gợi ý kết bạn</Text>
            <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContent}>
            {this.renderListFilmInfo()}
            </ScrollView>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  scrollContainer: {
    marginVertical: 5,
    // paddingVertical: 1,
   
  },
  scrollContainerRow: {
    marginVertical: 5,
    
   
  },
  scrollContentRow: {
    
    paddingBottom: 5,
    
    
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    
    marginVertical: 10,
  },
  info: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    
  },
  infoRow: {
   
    
    borderRadius: 10,
    paddingHorizontal: 10,
   
  },
  icon: {
    height: 75,
    width: 75,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#fff',
  },
  infoContent: {
    // width: '80%',
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,

  },
  infoContentRow: {
    width: '100%',
    fontWeight: "bold",
    alignItems: 'center',
    
  },
  addFriends: {
      backgroundColor: '#b99de1',
      borderRadius: 30,
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 10,

  },
  header : {
      fontWeight: "bold",
      fontSize: 20,
    //   marginVertical: 1,
      
  },
 
});

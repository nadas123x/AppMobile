import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 
        {color:"greenforest",   image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"},
      actualite:this.props.navigation.state.params['actualite']
    };
  }




  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.actualite}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id; 
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:"#fff"}]} onPress={() => {this.props.navigation.navigate('ActualiteContent',{'actualite':this.state.actualite[item.id]})}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title.replace('\n','')}...</Text>
                  <Image style ={styles.icon1} source={{uri:item['img']}}/>
                </View>
                <Image style={styles.cardImage} source={{uri:item['img']}}/>
                <Text style={styles.date}>{item['date']} </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item['desc'].replace('\n','')} </Text>
                </View>
                
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#A4BD24",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
    marginTop:20,
    borderRadius:5,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 100,  
    elevation: 10,
    
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center",
    
  },
  date:{
    marginTop:'5%',
  marginLeft:'5%'
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    paddingTop: 12.5,
    paddingBottom: 25,

  },
  cardImage:{
    height: 140,
    width: 100,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"black",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    color:"black",
    textAlign:'center',
  },
  icon:{
    height: 20,
    width: 20, 
  }
});                         
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
      data: [
        {id:1, title: "",      color:"greenforest",   image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"},
        {id:1, title: "",     color:"#greenforest",  image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"},
        {id:2, title: "",     color:"greenforest",  image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"} ,
        {id:3, title: "",   color:"greenforest",   image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"} ,
        {id:4, title: "",  color:"#greenforest",  image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"} ,
        {id:5, title: "",   color:"#greenforest",   image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"} ,
        {id:6, title: "",   color:"greenforest",  image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"} ,
       
      ]
    };
  }

  


  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item.view)}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image style={styles.icon1} source={{uri:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"}}/>
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} actualité</Text>
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
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"green",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});                         
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
              <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data.color}]} onPress={() => {this.props.navigation.navigate('ActualiteContent',{'actualite':this.state.actualite[item.id]})}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}...</Text>
                  <Image style ={styles.icon1} source={{uri:this.state.actualite[item.id]['img']}}/>
                </View>
                <Image style={styles.cardImage} source={{uri:this.state.actualite[item.id]['img']}}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} </Text>
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
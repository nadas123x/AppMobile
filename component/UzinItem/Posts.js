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
  Button
} from 'react-native';

import {BackHandler} from 'react-native'
export default class Posts extends Component {

  
  constructor(props) {
    super(props);
    
    this.state = {
      data: [
        {id:1, title: "",   

                         image:"https://imagizer.imageshack.com/img922/8833/w4qGxr.png"},
        {id:2, title: "",           image:"https://imagizer.imageshack.com/img922/7228/oT9Gm9.png"} ,
        {id:3, title: " ",             image:"https://imagizer.imageshack.com/v2/800x600q90/922/Qx0r0H.png"}, 
        {id:4, title: "",           image:"https://imagizer.imageshack.com/img923/1181/NsFt0J.png"}, 
        {id:6, title: "",          image:"https://imagizer.imageshack.com/img923/6222/5uoknL.png"}, 
      
      
      ]
    };
  }
  /* la fonction ci-desssous permets d'interdire de revenir en arrière quand on est sur le componenent Posts */
  
  componentDidMount(){
      const onBackPress = () => {
        BackHandler.exitApp()
        return false
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      
  }
  ///////////////////////////////////////////////////////////////
  handleMenu = (idMenu) => {
    console.log("chka7   " + idMenu)
    if(idMenu==1){
      let actualite=this.props.navigation.state.params['actualite']
      this.props.navigation.navigate('News',{actualite})
    }
    if(idMenu==2){
      this.props.navigation.navigate('Pho')
    }
    if(idMenu==3){
      this.props.navigation.navigate('Prrop')
    }
    if(idMenu==4){
      this.props.navigation.navigate('Usine')
    }
   
    if(idMenu==6){
      this.props.navigation.navigate('Tyy')
    }
    
  }
  
  render() {
    return (
      <View style={styles.container}>
       
        <FlatList style={styles.list}
          
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => { 
            const item = post.item;
            return (
              <TouchableOpacity onPress={()=> this.handleMenu(item.id)}>
                <View style={styles.card} >

                  <Image style={styles.cardImage} source={{uri:item.image}} />
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                       <Text style={styles.time}>{item.time}</Text>

                    </View>
                    

                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton} >
                            <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5bcu9QwfeEJG3qT-GmX7yyLDiOhxxpTdJEQpGLGVJ80GhB4T5_dRnsx-wE2TWvtAwUE&usqp=CAU'}}/>
                            <Text style={styles.socialBarLabel}></Text>
                          </TouchableOpacity>
                        </View>

                        

                       
                      </View>
                    </View>
                  </View>
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
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 9,
  },
  /******** card **************/
  card:{
    margin: 2,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "olivedrab",
    backgroundColor: "olivedrab",
  },
  cardHeader: {
    paddingVertical: 7,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row-reverse',
    paddingTop: 10,
    paddingBottom: 0,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    color: "black",
    marginTop: 5,
    fontStyle:'italic',
    
    marginLeft: 20,
    marginRight: 200,
    borderRadius:80,

    
    },
   
  icon: {
    width:30,
    height:30,

  },
  image:{
    width:80,
    height:90,
  }
 
});  

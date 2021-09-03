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
        {id:1, title: "Actualités",   

                         image:"http://fnh.ma//uploads/actualites/60a6683edaab0.jpg"},
        {id:2, title: "",           image:"https://www.infomediaire.net/wp-content/uploads/2017/06/Phosboucraa.jpg"} ,
        {id:3, title: " ",             image:"https://s3.lebrief.ma/s3fs-public/styles/facebook/public/2020-08/ocp_jorf_lasfar.jpg?h=c673cd1c&itok=EMNpaaP1"}, 
        {id:4, title: "",           image:"https://corpo.ocpgroup.ma/sites/default/files/styles/optimized/public/2019-03/20160309_AFC_JORF_92.jpg?itok=aPuXq3tB"}, 
        {id:5, title: "",             image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"}, 
        {id:6, title: "",          image:"https://www.agrijob.ma/wp-content/uploads/2018/06/OCP-logo.jpg"}, 
      
      
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
      this.props.navigation.navigate('News')
    }
    if(idMenu==2){
      this.props.navigation.navigate('Prrop')
    }
    if(idMenu==3){
      this.props.navigation.navigate('SB')
    }
    if(idMenu==4){
      this.props.navigation.navigate('SB')
    }
    if(idMenu==5){
      this.props.navigation.navigate('News')
    }
    if(idMenu==6){
      this.props.navigation.navigate('News')
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
    marginTop:0,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 6,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "olivedrab",
    backgroundColor: "olivedrab",
  },
  cardHeader: {
    paddingVertical: 7,
    paddingHorizontal: 16,
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
    fontSize:22,
    color: "forestgreen",
    marginTop: 20,
    fontStyle:'italic',
    textDecorationStyle :'dotted'
    },
  icon: {
    width:30,
    height:30,

  },
 
});  

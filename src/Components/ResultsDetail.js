import React from 'react'
import { View,Image, Text, StyleSheet ,FlatList,ScrollView } from "react-native";


const ResultsDetail = ({result , image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:result.image_url}} />  
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars , {result.review_count} Reciews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        height:120,
        width:250,
        borderRadius:4
        ,marginBottom:5
    },name:{
        fontWeight:'bold',fontSize:14
    },
    container :{ marginLeft : 15 ,} ,

});

export default ResultsDetail

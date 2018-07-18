import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Animated,
    Easing,
    FlatList,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions, ActionConst } from 'react-native-router-flux';

import arrowImg from '../Images/left-arrow.png';
import { black } from 'ansi-colors';


const SIZE = 80;
export default class FoodItem extends Component {


limitString =(string,num)=>{
    
if(typeof string=="string")
return string.length>num ? string.slice(0,num)+"...":string.slice(0,num);
}



    render() {

      
        var { item, index } = this.props.item;




        return (
            <View key={index} style={styles.container}>

                <View style={styles.content}>
                    <Image source={{ url: item.imgUrl }} style={{ flex: 1, height: 200 }}></Image>
                    <View style={styles.detailcontentback}> </View>
                    <View style={styles.detailcontent}>
                        <Text style={styles.namefood}>{item.nameFood}</Text>
                        
                        <Text style={styles.description}>{this.limitString(item.description,40)}
                        <Text  style={styles.readmore}>Read more{"\n"}</Text>
                        <Text style={styles.price}>{item.price} VND{"\n"}</Text>
                        <Text style={styles.pricepromotion}>{item.pricepromotion} VND</Text>
                        </Text>

                    </View>

                </View>


                <View style={styles.comboreview}>
                    <View style={styles.comboitem} > <TouchableOpacity>
                        <Image source={require('../Images/hearticon.png')} style={{ width: 26, height: 26 }}></Image>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.comboitem} > <TouchableOpacity>
                        <Image source={require('../Images/commenticon.png')} style={{ width: 26, height: 26 }}></Image>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.comboitem} > <TouchableOpacity>
                        <Image source={require('../Images/addcart.png')} style={{ width: 26, height: 26 }}></Image>

                    </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',

        marginTop: 5,

    },
    content: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'yellow',

        marginTop: 3,
        height: 200
    },
    detailcontent: {
        marginLeft:2,
        position: 'absolute',
        left: 0,
        top: 105,
      //  backgroundColor: "#d8d6ce",

    },
    detailcontentback: {
        position: 'absolute',
        left: 0,
        top: 100,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: "#79747487",
    },namefood:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"
    },price:{
        fontSize:20,
        fontWeight:"bold",
        color:"yellow",
        flex:1

    },pricepromotion:{
        fontSize:20,
        fontWeight:"bold",
        color:"gray",
        textDecorationLine:"line-through",
      

    },description:{
        color:"white"
    },
     readmore:{
        fontWeight:"bold"
    },
    comboreview: {
        flex: 1, flexDirection: 'row',
        justifyContent: "center"
    },
    comboitem: {
        height: 40,
        flex: 0.33,
        marginTop:3,
        borderStyle: 'solid',
        borderTopColor: '#eaebed',
        borderTopWidth: 2,
        backgroundColor: 'white',
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',

    },
    comboitemtext: {

        alignContent: "center",
        alignItems: 'center',
        fontWeight: 'bold'
    }
})
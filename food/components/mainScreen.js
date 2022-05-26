import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TouchableWithoutFeedback, TextInput, Modal,TouchableOpacity } from 'react-native';
import {FlatList} from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import Additem from './addfooditem'
import foods from './fooditems'


export default function App({navigation}) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const ModalPopUp = ({visible})=>{
    const [ showModal, setshowModal ] = useState(visible);   
    return (
    <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}> 
          <View style={styles.modalContainer}>
            <Text style= {{fontWeight: 'bold', fontSize: 15}} >Add Food </Text> 
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
              <View style={styles.header}>
                <Icon name= 'close'> </Icon>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.input}> 
              <Text >Food Name </Text>
              <TextInput  
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 , borderRadius: 7}}
              // onChangeText={newText => setName(newText)}
              />
            </View>

            <View style={styles.input}>  
              <Text >Food Price </Text>
              <TextInput  
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 , borderRadius: 7 ,}} 
              keyboardType="numeric"
              // onChangeText={newText => setPrice(newText)}
              />
            </View> 
            <View style={styles.input}>
                <Button style={{ width: '50%' , marginTop: 10 }}
                  color="#03b760"
                  title="Add Food Item"
                  onPress={() => addFood(name,price)}
                />
            </View>
            
          </View>
        </View>
    </Modal> 
    );
  }

  const removeJsonAttrs = (json,attrs) =>{
    return JSON.parse(JSON.stringify(json,function(k,v){
        return attrs.indexOf(k)!==-1 ? undefined: v;
}));}

const addFood = ( name,price )=> {
  obj = {
    name : name,
    price : price
  }
  foods.push(obj)
  setVisible(false)
}

  const FoodCard =( {item} ) =>{
    return(
      <View style={styles.foodCard}>
        <FontAwesome5 name="grip-vertical" size={23} color='#A9A9A9' />

        <View style={styles.itemname}>
          <Text style= {{fontWeight: 'bold', fontSize: 15}}>{item.name} </Text> 
        </View>

        <View style={styles.itemprice}>
          <Text style= {{ fontSize: 15}}>Price: </Text>
          <Text style= {{fontWeight: 'bold', fontSize: 15}}>{item.price} </Text>
        </View>

        <View style={styles.verticleLine}></View>
        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
          <View style={styles.editButton}> 
              <Icon name="edit" />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => removeJsonAttrs(foods,["name"])}>
          <View style={styles.deleteButton}> 
              <Icon name="delete-outline" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  const [ visible, setVisible ] = useState(false);
  var obj = {
    name: 'Banana',
    price: '₹ 100',
  }
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={{paddingBottom: 15}}
          data={foods}
          renderItem={( {item} ) => <FoodCard item={item} />}
        />
        <Text>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
      </SafeAreaView>
      
      <ModalPopUp visible={visible} />
      <TouchableOpacity  onPress={() => setVisible(true)}>
        <View style={styles.addCard}> 
          <FontAwesome5 name="plus" size={18} />
          <Text style= {{padding: 20,fontWeight: 'bold', fontSize: 17}} > Add Food Item </Text>  
        </View>
      </TouchableOpacity>
      
      
        
      <View style={styles.button}> 
          <Button style={{ width: '50%' , marginTop: 10  }}
            color="#03b760"
            title="Final Food List"
            onPress={() => navigation.navigate('FinalFoodList')}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  button:{
    right: 20,
    left: 20,
    position: 'absolute',
    bottom: 40,
  },
  foodCard:{
    height: 60,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    borderColor: '#A9A9A9',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
  },
  itemname:{
    marginLeft: 15,
    paddingVertical: 10
  },
  itemprice:{
    flexDirection: 'row',
    marginLeft: 33,
    paddingVertical: 10,
    position: 'absolute',
    left: 90,
  },
  verticleLine:{
    position: 'absolute',
    left: 220,
    height: '100%',
    width: 1,
    backgroundColor: '#A9A9A9',
  },
  editButton:{
    position: 'absolute',
    left: 240,
    flexDirection: 'row',
  },
  deleteButton:{
    position: 'absolute',
    left: 280,
    flexDirection: 'row',
  },

  addCard:{
    height: 60,
    borderRadius: 10,
    backgroundColor: '#e1f6ed',
    borderColor: '#468f71',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
  },

  modalBackground:{
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
  },
  modalContainer:{
    width:'100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    elevation: 20,
    
  },
  header:{
    position:'absolute',
    left: 330,
    top: 30
  },
  input:{
    marginVertical: 15
  }
});

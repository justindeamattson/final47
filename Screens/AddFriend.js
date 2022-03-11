//TODO: This is placeholder code that must be modified



import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '../components/Task';
import Colors from '../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';


export default function RecommendationsScreen({ navigation }) {
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState(['@amber234']);

const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  setTaskItems(itemsCopy)
}
  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
      <View style = {{flexDirection: 'row',  marginTop: 21,
        marginBottom: 15}}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="chevron-back-outline" size = {30}  ></Ionicons>
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>Add Friend</Text>
            </View>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                // <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                //   <Task text={item} status = 'friend requested' /> 
                // </TouchableOpacity>
                <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        
        <Text style={styles.itemText}>{item}</Text>
        <Text style={styles.status}>friend requested</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add Friend'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            {/* <Text style={styles.addText}>+</Text> */}
         
          <Ionicons name="person-add-outline" size = {25} color = {Colors.peach}></Ionicons>
        </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize:30,
  textAlign: 'center' ,
  marginLeft: '30%'
    
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center' ,
    marginLeft: 30
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  status:{
  marginLeft: '15%',
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: Colors.peach,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    width: '80%',
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 5,

  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
});
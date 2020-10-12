
import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Form from './Form';
import List from './List';

export default function App() {

  //STATE STUFF
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({});

  const handleClearAll = () => {
    Alert.alert(
      'Are you sure delete all task?',
      '',
      [
        { text: 'OK', onPress: () => setTodos([]) },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} item={item} />
      <List todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} setItem={setItem} setInput={setInput} />
      <View style={styles.clearAll} >
        <Button onPress={handleClearAll} color="#ef476f" title="Clear All Tasks" />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#073b4c',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  clearAll: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    justifyContent: "flex-end",
    width: 200,
    marginBottom: 20
  }
});

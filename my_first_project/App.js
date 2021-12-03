import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text,View,TextInput,ScrollView} from 'react-native';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos,setTodos]=useState([]);

  const addTodo = text =>{
    setTodos([
      ...todos,{id:Math.random(),textValue:text,checked:false},

    ]);
  };
  const onRemove = id => e => {
    setTodos(todos.filter(todo=>todo.id !== id));
  };
  const onToggle = id => e =>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,checked: !todo.checked}:todo,),);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello TodoList!</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo}/>
        <ScrollView>
          <View>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 0,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 20, // to provide rounded corners
    borderTopRightRadius: 20, // to provide rounded corners
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom:20,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;
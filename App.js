import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/appStyles';

const App = () => {
  const [textInput, setTextInput] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);

  React.useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemFlex}>
          <Text
            style={[
              styles.textItem,
              {textDecorationLine: todo?.completed ? 'line-through' : 'none'},
            ]}>
            {todo?.task}
          </Text>
        </View>

        {!todo?.completed && (
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => markTodoComplete(todo?.id)}>
            <Text style={styles.textChecklist}>✓</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => deleteTodo(todo?.id)}>
          <Text style={styles.textDeleteList}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const saveTodoToUserDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('@storage_Key', stringifyTodos);
    } catch (e) {}
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');

      if (todos !== null) {
        setTodos(JSON.parse(todos));
      }
    } catch (e) {}
  };

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const markTodoComplete = todoId => {
    const newTodos = todos.map(item => {
      if (item.id === todoId) {
        return {...item, completed: true};
      }
      return item;
    });

    setTodos(newTodos);
  };

  const deleteTodo = todoId => {
    const newTodos = todos.filter(item => item.id !== todoId);
    setTodos(newTodos);
  };

  const clearTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.header}>
        <Text style={styles.textTodo}>Todo App</Text>

        <Button color="blue" title="Clear" onPress={clearTodos} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            value={textInput}
            onChangeText={text => setTextInput(text)}
          />
        </View>

        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Text style={styles.textIconPlus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

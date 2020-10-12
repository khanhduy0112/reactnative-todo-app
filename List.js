import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Todo from './Todo';

function List({ todos, setTodos, edit, setEdit, setItem, setInput }) {


    const handleRemove = item => {
        if (edit === false) {
            setTodos(todos.filter((todo) => todo.id !== item.id));
        }
    }

    const handleEdit = (item) => {
        setEdit(!edit)
        setItem(item)
        setInput(item.text)
    }

    return (
        <View style={{ flex: 3, marginTop: 20 }}>
            <FlatList
                data={todos}
                keyExtractor={item => item.text.toString()}
                renderItem={({ item, index }) =>
                    <Todo
                        bgColor={index % 2 === 0 ? '#2196F3' : '#8ecae6'}
                        item={item}
                        handleRemove={handleRemove}
                        handleEdit={handleEdit}
                    >
                    </Todo>}
            />
        </View>
    )
}

export default List

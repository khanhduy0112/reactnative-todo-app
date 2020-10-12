import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'


function Form({ input, setInput, todos, setTodos, edit, setEdit, item }) {
    const handleSubmit = () => {
        if (input.length > 0) {
            if (edit === true) {
                const temp = [...todos];
                setTodos(temp.map((el) => {
                    return el.id === item.id ? { ...item, text: input } : el
                }))
                setEdit(!edit)
            } else {
                const todo = {
                    id: Date.now(),
                    text: input,
                    complete: false
                }
                setTodos([...todos, todo]);
            }
        }
        setInput("");
    }
    const handleClear = () => {
        setInput("");
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logoText}>Todo List</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setInput(text)}
                    value={input}
                    placeholder="Enter your task"
                    autoCapitalize
                    autoFocus
                />
            </View>
            <View style={styles.buttonContainer} >
                <Button
                    title="Clear"
                    color="#8ecae6"
                    onPress={handleClear}
                    disabled={input.length > 0 ? false : true}
                />
                <Button
                    // color="#f194ff"
                    title={edit ? "Edit" : "Add"}
                    onPress={handleSubmit}

                />
            </View>
        </View>
    )
}

export default Form

const styles = ({
    container: { flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginTop: 40 },
    logoText: { color: 'white', marginTop: 20, marginBottom: 20, textAlign: "center", textTransform: "uppercase", fontSize: 35 }
    ,
    input: {
        width: 250,
        height: 40,
        borderBottomWidth: 2,
        color: 'white',
        borderBottomColor: "white",
    },
    buttonContainer: {
        marginTop: 10,
        width: 120,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        marginBottom: 30
    }
})
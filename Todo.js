import React from 'react'
import { Button, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


function Todo({ item, handleRemove, handleEdit, bgColor }) {

    return (
        <View
            style={{
                backgroundColor: bgColor,
                flexDirection: "row", marginBottom: 10, width: 300, justifyContent: "space-between", borderRadius: 5
            }}>
            <Text
                style={{
                    flex: 3,
                    marginBottom: 5,
                    color: 'white',
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    padding: 10,
                    fontSize: 14
                }}
            >
                {item.text}
            </Text>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 40 }}>
                <Icon
                    name="edit" color="white" size={25}
                    style={{ marginRight: 10 }}
                    onPress={() => handleEdit(item)}
                />
                <Icon
                    name="close"
                    color="white"
                    size={23}
                    onPress={() => handleRemove(item)}

                />
            </View>
        </View>
    )
}
// #f194ff
//steelblue

export default Todo

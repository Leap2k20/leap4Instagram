import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

interface Props {
    username?: string;
    description?: string;
}

export const PostDescription = (props: Props) => {
    const {
        username = 'username',
        description = 'Ex amet incididunt ea sint. Laborum aute adipisicing consectetur labore non ullamco fugiat amet. Aute laborum ullamco irure culpa. Labore sunt commodo voluptate laborum adipisicing enim magna id sit. Non cillum sint id nisi tempor est consectetur. Et enim laboris est velit sit duis aute ipsum in labore fugiat. Commodo do tempor aliqua reprehenderit et consequat.'
    } = props;
    return (
        <View style={styles.container}>
            <Text>
                <Text onPress={() => { Alert.alert("You clicked username") }} style={styles.username}>{username}</Text>
                {' '}
                {description}
            </Text>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    username: {
        fontWeight: "bold",
    }
})
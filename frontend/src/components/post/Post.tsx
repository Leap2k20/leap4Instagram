import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostDescription } from "./PostDescription";
import { PostImage } from "./PostImage";
import { PostUserHeader } from "./PostUserHeader";

export const Post = () => {
    const numberOfLikes = 100;
    return (
        <View>
            <PostUserHeader />
            <PostImage />
            <Text style={styles.numberOfLikes}>
                {numberOfLikes} likes
            </Text>
            <PostDescription />
        </View>
    )
}

const styles = StyleSheet.create({
    numberOfLikes: {
        paddingHorizontal: 12,
        fontWeight: 'bold'
    }
})
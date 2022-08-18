import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        theme={{ roundness: 100 }}
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    marginVertical: 5,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 50,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 12,
    color: theme.colors.error,
    // paddingTop: -20,
  },
});

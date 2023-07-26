import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "800",
  },
  input: {
    backgroundColor: " rgba(0,0,0,0.1)",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  button: {},
});

export default () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Joo"
        placeholderTextColor=" rgba(0,0,0,0.5)"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <Button
        title="SAY HELLO"
        onPress={() => {
          setName("");
          alert(`Hello, ${name}`);
        }}
      />
    </View>
  );
};

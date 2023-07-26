// Styling
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#7ce0f9",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Square = ({ text, backgroundColor }) => (
  <View style={[styles.box, { backgroundColor: backgroundColor || "#7ce0f9" }]}>
    <Text>{text}</Text>
  </View>
);

export default () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" backgroundColor="#4dc2c2" />
      <Square text="Square 3" backgroundColor="#ff637c" />
    </View>
  );
};

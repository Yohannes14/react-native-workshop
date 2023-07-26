import { TouchableOpacity, Text, View } from "react-native";

const Button = ({ text, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor || "#ff637c",
        alignSelf: "center",
        marginVertical: 14,
        paddingVertical: 8,
        paddingHorizontal: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View>
      <Button text="Say hello" onPress={() => alert("hello")} />
      <Button
        backgroundColor="#4dc2c2"
        text="Say goodbye"
        onPress={() => alert("goodbye!")}
      />
    </View>
  );
};

export default App;

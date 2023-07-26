import { TouchableOpacity, Text, Button } from "react-native";

const App = () => {
  return (
    <>
      <Button
        title="Button 1"
        onPress={() => alert("hello 1")}
        style={{
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 3,
          paddingBottom: 3,
          color: "#fff",
        }}
      />
      <TouchableOpacity
        onPress={() => alert("hello 1")}
        style={{
          backgroundColor: "blue",
          alignSelf: "center",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <Text style={{ color: "#fff" }}>Button</Text>
      </TouchableOpacity>
    </>
  );
};

export default App;

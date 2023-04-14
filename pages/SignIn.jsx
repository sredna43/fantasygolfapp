import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function SignIn(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign In</Text>
      <Button onPress={() => navigation.navigate("Sign Up")}>Sign Up</Button>
    </View>
  );
}

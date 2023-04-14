import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function SignUp(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up</Text>
      <Button onPress={() => navigation.navigate("Sign In")}>Sign In</Button>
    </View>
  );
}

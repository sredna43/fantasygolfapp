import { Button, Text } from "react-native-paper";
import { View } from "react-native";

function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LeagueHome")}
      >
        Create a League
      </Button>
    </View>
  );
}

export default HomeScreen;

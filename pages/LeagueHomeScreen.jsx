import { Button, Text } from "react-native-paper";
import { View } from "react-native";

function LeagueHomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button mode="contained" onPress={() => navigation.navigate("Draft")}>
        Go to Draft
      </Button>
    </View>
  );
}

export default LeagueHomeScreen;

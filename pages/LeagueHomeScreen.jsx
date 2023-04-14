import { Text } from "react-native-paper";
import { View } from "react-native";

function LeagueHomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>League Home</Text>
    </View>
  );
}

export default LeagueHomeScreen;

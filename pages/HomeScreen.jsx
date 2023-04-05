import { Switch, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { useContext } from "react";
import { PreferencesContext } from "../PreferencesContext";

function HomeScreen() {
  const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello, World!</Text>
      <Switch
        color={theme.colors.primary}
        value={isDarkTheme}
        onValueChange={toggleTheme}
      />
    </View>
  );
}

export default HomeScreen;

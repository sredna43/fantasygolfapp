import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { useCallback, useMemo, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PreferencesContext } from "./PreferencesContext";
import { CombinedDefaultTheme, CombinedDarkTheme } from "./config/CustomTheme";
import CustomNavBar from "./components/CustomNavBar";
import HomeScreen from "./pages/HomeScreen";
import DraftScreen from "./pages/DraftScreen";
import LeagueHomeScreen from "./pages/LeagueHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  let theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ header: (props) => <CustomNavBar {...props} /> }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Draft" component={DraftScreen} />
            <Stack.Screen name="LeagueHome" component={LeagueHomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

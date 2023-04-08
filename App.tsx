// Root wrappers
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { PreferencesContext } from "./PreferencesContext";

// Functions
import { useCallback, useMemo, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Styles
import { CombinedDefaultTheme, CombinedDarkTheme } from "./config/CustomTheme";

// Components
import CustomNavBar from "./components/CustomNavBar";

// Pages
import HomeScreen from "./pages/HomeScreen";
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
            <Stack.Screen name="LeagueHome" component={LeagueHomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

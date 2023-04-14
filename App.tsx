// Root wrappers
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { PreferencesContext } from "./PreferencesContext";
import { RecoilRoot, atom, useRecoilState } from "recoil";

// Functions
import { useCallback, useMemo, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Styles
import { CombinedDefaultTheme, CombinedDarkTheme } from "./config/CustomTheme";

// Components
import CustomNavBar from "./components/CustomNavBar";
import { emptyUser } from "./types/User";

// Pages
import HomeScreen from "./pages/HomeScreen";
import LeagueHomeScreen from "./pages/LeagueHomeScreen";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const userAtom = atom({
  key: "user",
  default: {
    user: emptyUser,
    token: "",
  },
});

const Stack = createNativeStackNavigator();

function NavigationStack() {
  const [user] = useRecoilState(userAtom);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header: (props) => <CustomNavBar {...props} /> }}
    >
      {user.token ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LeagueHome" component={LeagueHomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}

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
    <RecoilRoot>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <NavigationStack />
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </RecoilRoot>
  );
}

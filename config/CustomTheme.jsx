import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import merge from "deepmerge";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { adaptNavigationTheme } from "react-native-paper";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CustomLightTheme = {
  ...MD3LightTheme,
  colors: {
    primary: "rgb(0, 109, 59)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(153, 247, 181)",
    onPrimaryContainer: "rgb(0, 33, 14)",
    secondary: "rgb(79, 99, 83)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(210, 232, 212)",
    onSecondaryContainer: "rgb(13, 31, 19)",
    tertiary: "rgb(58, 100, 111)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(190, 234, 246)",
    onTertiaryContainer: "rgb(0, 31, 38)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(251, 253, 248)",
    onBackground: "rgb(25, 28, 25)",
    surface: "rgb(251, 253, 248)",
    onSurface: "rgb(25, 28, 25)",
    surfaceVariant: "rgb(221, 229, 219)",
    onSurfaceVariant: "rgb(65, 73, 66)",
    outline: "rgb(113, 121, 113)",
    outlineVariant: "rgb(193, 201, 191)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(46, 49, 46)",
    inverseOnSurface: "rgb(240, 241, 236)",
    inversePrimary: "rgb(125, 218, 155)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 239)",
      level2: "rgb(231, 242, 233)",
      level3: "rgb(223, 237, 227)",
      level4: "rgb(221, 236, 225)",
      level5: "rgb(216, 233, 222)",
    },
    surfaceDisabled: "rgba(25, 28, 25, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 25, 0.38)",
    backdrop: "rgba(43, 50, 44, 0.4)",
  },
};

const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    primary: "rgb(125, 218, 155)",
    onPrimary: "rgb(0, 57, 28)",
    primaryContainer: "rgb(0, 82, 43)",
    onPrimaryContainer: "rgb(153, 247, 181)",
    secondary: "rgb(182, 204, 184)",
    onSecondary: "rgb(34, 53, 39)",
    secondaryContainer: "rgb(56, 75, 60)",
    onSecondaryContainer: "rgb(210, 232, 212)",
    tertiary: "rgb(162, 206, 218)",
    onTertiary: "rgb(2, 54, 64)",
    tertiaryContainer: "rgb(33, 76, 87)",
    onTertiaryContainer: "rgb(190, 234, 246)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(25, 28, 25)",
    onBackground: "rgb(225, 227, 222)",
    surface: "rgb(25, 28, 25)",
    onSurface: "rgb(225, 227, 222)",
    surfaceVariant: "rgb(65, 73, 66)",
    onSurfaceVariant: "rgb(193, 201, 191)",
    outline: "rgb(139, 147, 138)",
    outlineVariant: "rgb(65, 73, 66)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(225, 227, 222)",
    inverseOnSurface: "rgb(46, 49, 46)",
    inversePrimary: "rgb(0, 109, 59)",
    elevation: {
      level0: "transparent",
      level1: "rgb(30, 38, 32)",
      level2: "rgb(33, 43, 35)",
      level3: "rgb(36, 49, 39)",
      level4: "rgb(37, 51, 41)",
      level5: "rgb(39, 55, 43)",
    },
    surfaceDisabled: "rgba(225, 227, 222, 0.12)",
    onSurfaceDisabled: "rgba(225, 227, 222, 0.38)",
    backdrop: "rgba(43, 50, 44, 0.4)",
  },
};

export const CombinedDefaultTheme = merge(LightTheme, CustomLightTheme);
export const CombinedDarkTheme = merge(DarkTheme, CustomDarkTheme);

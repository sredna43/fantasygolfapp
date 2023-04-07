import { getHeaderTitle } from "@react-navigation/elements";
import { useContext } from "react";
import { Appbar, Menu } from "react-native-paper";
import { PreferencesContext } from "../PreferencesContext";
import { useState } from "react";
import { Platform } from "react-native";

export default function CustomNavBar(props) {
  const { navigation, back, route, options } = props;
  const title = getHeaderTitle(options, route.name);
  const { toggleTheme } = useContext(PreferencesContext);

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleDismissMenu = () => {
    Platform.OS !== "web" && closeMenu();
  };

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={`Fantasy Golf - ${title}`} />

      <Menu
        visible={visible}
        onDismiss={handleDismissMenu}
        anchor={
          <Appbar.Action icon="dots-vertical" onPress={() => openMenu()} />
        }
      >
        <Menu.Item
          onPress={() => {
            toggleTheme();
            closeMenu();
          }}
          title={"Toggle Light/Dark Mode"}
          leadingIcon="theme-light-dark"
        />
      </Menu>
    </Appbar.Header>
  );
}

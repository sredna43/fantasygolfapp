import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar } from "react-native-paper";

export default function CustomNavBar(props) {
  const { navigation, back, route, options } = props
  const title = getHeaderTitle(options, route.name)
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={`Master's Fantasy - ${title}`} />
    </Appbar.Header>
  );
}

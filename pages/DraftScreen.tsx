import { useState } from "react";
import { ScrollView } from "react-native";
import {
  Button,
  List,
  Modal,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import { emptyGolfer, Golfer } from "../types/Golfer";
import { testServerDraftMessage } from "./test/testData";

function DraftScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(emptyGolfer);
  const theme = useTheme();

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleDraftBoardClick = (player: Golfer) => {
    showModal();
    setSelectedPlayer(player);
  };

  const handleDraftPlayer = (player: Golfer) => {
    console.log(`Drafted ${player.name}`);
    hideModal();
  };

  const modalStyle = {
    backgroundColor: theme.colors.background,
    padding: 30,
  };

  return (
    <ScrollView>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          theme={theme}
          contentContainerStyle={modalStyle}
        >
          <Text variant="displaySmall">{selectedPlayer.name}</Text>
          <Button
            mode="contained"
            onPress={() => handleDraftPlayer(selectedPlayer)}
          >
            Draft Player
          </Button>
        </Modal>
      </Portal>
      {testServerDraftMessage.leagueDetails?.allGolfers?.map((player, i) => {
        return (
          <List.Item
            title={player.name}
            onPress={() => handleDraftBoardClick(player)}
            key={i}
          />
        );
      })}
    </ScrollView>
  );
}

export default DraftScreen;

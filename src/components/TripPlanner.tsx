import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

const SEPARATOR = ' > ';

type Props = {
  destinations: string[];
  isVisible: boolean;
  onClear: () => void;
};
export function TripPlanner(props: Props) {
  const {destinations, isVisible, onClear} = props;

  return (
    <Modal visible={isVisible} style={styles.container}>
      <Title>My Trip</Title>
      <Destinations>{destinations.join(SEPARATOR)}</Destinations>
      <ClearSelectionsTextButton onPress={onClear}>
        Clear Selections
      </ClearSelectionsTextButton>
    </Modal>
  );
}

function Title({children}: {children: string}) {
  return <Text style={styles.title}>{children}</Text>;
}

function Destinations({children}: {children: string}) {
  return <Text style={styles.destinations}>{children}</Text>;
}

type ClearSelectionsTextButtonProps = {
  onPress: () => void;
  children: string;
};
function ClearSelectionsTextButton(props: ClearSelectionsTextButtonProps) {
  const {onPress, children} = props;
  return (
    <Pressable style={styles.clearSelections} onPress={onPress}>
      {children}
    </Pressable>
  );
}

type Style = {
  container: ViewStyle;
  destinations: TextStyle;
  title: TextStyle;
  clearSelections: ViewStyle;
};
const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  destinations: {
    fontSize: 14,
  },
  clearSelections: {
    color: 'red',
  },
});

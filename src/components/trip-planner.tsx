import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const SEPARATOR = ' > ';

type Props = {
  destinations: string[];
  onClear: () => void;
};
export function TripPlanner(props: Props) {
  const {destinations, onClear} = props;

  return (
    <Container>
      <Title>My Trip</Title>
      <Destinations>{destinations.join(SEPARATOR)}</Destinations>
      <ClearSelectionsTextButton onPress={onClear}>
        Clear Selections
      </ClearSelectionsTextButton>
    </Container>
  );
}

function Container({children}: {children: React.ReactNode}) {
  return <View style={styles.container}>{children}</View>;
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
    <Pressable onPress={onPress}>
      <Text style={styles.clearSelectionsText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'orange',
  },
  title: {
    fontWeight: 'bold',
  },
  destinations: {
    fontSize: 14,
  },
  clearSelectionsText: {
    color: 'red',
  },
});

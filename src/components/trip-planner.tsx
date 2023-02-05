import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {VerticalSpacer} from './vertical-spacer';

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
      <VerticalSpacer size={3} />
      <Destinations>{destinations.join(SEPARATOR)}</Destinations>
      <VerticalSpacer size={20} />
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
    <Pressable onPress={onPress} style={styles.clearSelectionsButton}>
      <Text style={styles.clearSelectionsText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#4C5270',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  destinations: {
    fontSize: 14,
    color: '#fff',
  },
  clearSelectionsButton: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  clearSelectionsText: {
    color: '#fff',
  },
});

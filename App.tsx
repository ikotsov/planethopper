import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ExpandedSpinner} from './src/components/ExpandedSpinner';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Headline>Planethopper</Headline>
      <ExpandedSpinner />
    </SafeAreaView>
  );
}

function Headline({children}: {children: string}) {
  return <Text style={styles.headline}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

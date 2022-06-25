import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function ExpandedSpinner() {
  return (
    <View style={styles.fullscreen}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
  },
});

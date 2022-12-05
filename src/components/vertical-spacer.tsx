import React from 'react';
import {View} from 'react-native';

export function VerticalSpacer({size}: {size: number}) {
  return <View style={{height: size}} />;
}

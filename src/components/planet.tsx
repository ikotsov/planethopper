import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PlanetType} from '../planet-type';

export function Planet({planet}: {planet: PlanetType}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: planet.image,
        }}
      />
      <View>
        <Name>{planet.name}</Name>
        <View>
          <Text>climate: {planet.climate}</Text>
          <Text>terrain: {planet.terrain}</Text>
          <Text>population: {planet.population}</Text>
        </View>
      </View>
    </View>
  );
}

function Name({children}: {children: string}) {
  return <Text style={styles.name}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 8,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

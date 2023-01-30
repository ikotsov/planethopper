import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PlanetType} from '../planet-type';
import {PlanetImageFilesRecord} from '../random-image-url-picker';

export function Planet({planet}: {planet: PlanetType}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={PlanetImageFilesRecord[planet.image]}
      />
      <View>
        <View style={styles.nameRow}>
          <Name>{planet.name}</Name>
          <Population>{planet.population}</Population>
        </View>
        <View>
          <Text>climate: {planet.climate}</Text>
          <Text>terrain: {planet.terrain}</Text>
        </View>
      </View>
    </View>
  );
}

function Name({children}: {children: string}) {
  return <Text style={styles.name}>{children}</Text>;
}

function Population({children}: {children: string}) {
  return <Text style={styles.population}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  population: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

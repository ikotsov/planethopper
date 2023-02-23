import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {PlanetType} from '../planet-type';
import {PlanetImageFilesRecord} from '../random-image-url-picker';
import {VerticalSpacer} from './vertical-spacer';

type Planet = {
  planet: PlanetType;
  isSelected: boolean;
  onSelect: () => void;
};

export function Planet(props: Planet) {
  const {planet, isSelected, onSelect} = props;
  return (
    <Pressable
      onPress={() => onSelect()}
      style={[styles.container, isSelected && styles.selected]}>
      <Image
        style={styles.image}
        source={PlanetImageFilesRecord[planet.image]}
      />
      <View style={styles.textColumn}>
        <View style={styles.nameRow}>
          <Name>{planet.name}</Name>
          <Population>{planet.population}</Population>
        </View>
        <VerticalSpacer size={4} />
        <View>
          <Text>climate: {planet.climate}</Text>
          <Text numberOfLines={1}>terrain: {planet.terrain}</Text>
        </View>
      </View>
    </Pressable>
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
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#f2f2f2',
  },
  selected: {
    borderColor: '#F652A0',
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 14,
    borderRadius: 10,
  },
  textColumn: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
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

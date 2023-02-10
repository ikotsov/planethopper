import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {ExpandedSpinner} from './src/components/expanded-spinner';
import {Planet} from './src/components/planet';
import {TripPlanner} from './src/components/trip-planner';
import {VerticalSpacer} from './src/components/vertical-spacer';
import {PlanetType} from './src/planet-type';
import {usePlanets} from './src/service/use-planets';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Headline>Planethopper</Headline>
      <VerticalSpacer size={20} />
      <MainContent />
    </SafeAreaView>
  );
}

function Headline({children}: {children: string}) {
  return <Text style={styles.headline}>{children}</Text>;
}

const MAX_SELECTED_PLANETS = 5;
function MainContent() {
  const {planets, isLoading, fetchMore} = usePlanets();
  const [selectedPlanets, setSelectedPlanets] = useState<
    {name: string; id: string}[]
  >([]);

  const isBigLoaderVisible = isLoading && planets.length === 0;
  if (isBigLoaderVisible) {
    return <ExpandedSpinner />;
  }

  const onSelectPLanet = (id: string, name: string) => {
    const isAlreadySelected = selectedPlanets.find(planet => planet.id === id);
    const hasReachedLimit = selectedPlanets.length === MAX_SELECTED_PLANETS;
    if (isAlreadySelected || hasReachedLimit) {
      return;
    }

    setSelectedPlanets(prevSelectedPlanets => [
      ...prevSelectedPlanets,
      {
        id,
        name,
      },
    ]);
  };

  const isTripPlannerVisible = selectedPlanets.length > 0;
  const isSmallLoaderVisible = isLoading && planets.length > 0;

  return (
    <>
      <FlatList
        data={planets}
        renderItem={({item}: {item: PlanetType}) => (
          <Planet
            onSelect={() => onSelectPLanet(item.id, item.name)}
            planet={item}
            isSelected={Boolean(
              selectedPlanets.find(planet => planet.id === item.id),
            )}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <VerticalSpacer size={15} />}
        onEndReached={fetchMore}
        contentContainerStyle={styles.list}
        scrollEnabled={!isLoading}
      />
      {isTripPlannerVisible && (
        <TripPlanner
          destinations={selectedPlanets.map(planet => planet.name)}
          onClear={() => setSelectedPlanets([])}
        />
      )}
      {isSmallLoaderVisible && <SmallLoader />}
    </>
  );
}

function SmallLoader() {
  return <ActivityIndicator size="large" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCECE0',
  },
  headline: {
    fontFamily: 'Verdana',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 8,
    color: '#F652A0',
  },
  list: {
    paddingHorizontal: 15,
  },
});

export default App;

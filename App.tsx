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
  const [selectedPlanets, setSelectedPlanets] = useState<string[]>([]);

  const isBigLoaderVisible = isLoading && planets.length === 0;

  if (isBigLoaderVisible) {
    return <ExpandedSpinner />;
  }

  const onSelectPLanet = (planetId: string) => {
    if (
      selectedPlanets.includes(planetId) ||
      selectedPlanets.length === MAX_SELECTED_PLANETS
    ) {
      return;
    }

    setSelectedPlanets(prevSelectedPlanets => [
      ...prevSelectedPlanets,
      planetId,
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
            onSelect={() => onSelectPLanet(item.id)}
            planet={item}
            isSelected={selectedPlanets.includes(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <VerticalSpacer size={10} />}
        onEndReached={fetchMore}
      />
      {isTripPlannerVisible && (
        <TripPlanner
          destinations={selectedPlanets}
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
  },
  headline: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

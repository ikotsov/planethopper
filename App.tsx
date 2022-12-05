import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {ExpandedSpinner} from './src/components/expanded-spinner';
import {Planet} from './src/components/planet';
import {VerticalSpacer} from './src/components/vertical-spacer';
import {PlanetType} from './src/planet-type';
import {usePlanets} from './src/service/use-planets';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Headline>Planethopper</Headline>
      <Content />
    </SafeAreaView>
  );
}

function Headline({children}: {children: string}) {
  return <Text style={styles.headline}>{children}</Text>;
}

function Content() {
  const {planets, currentPage, isLoading, fetchMorePlanets} = usePlanets();
  console.log({planets, currentPage, isLoading});

  useEffect(() => {
    const id = setTimeout(() => {
      fetchMorePlanets();
    }, 5000);

    return () => clearTimeout(id);
  }, [fetchMorePlanets]);

  if (isLoading) {
    return <ExpandedSpinner />;
  }

  return (
    <FlatList
      data={planets}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <VerticalSpacer size={10} />}
    />
  );
}

const renderItem = ({item}: {item: PlanetType}) => <Planet planet={item} />;

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

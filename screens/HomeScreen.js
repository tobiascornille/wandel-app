import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { 
  Input, 
  Layout, 
  Text,
  Button,
} from 'react-native-ui-kitten';

import { MonoText } from '../components/StyledText';

export default function HomeScreen(props) {
  const [destination, onChangeDestination] = React.useState('');
  const { navigate } = props.navigation;

  return (
    <Layout style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Layout style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Text category='h4'>
            Welcome in Lisbon!
          </Text>
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Text appearance='hint' style={{paddingBottom: 8}}>Where do you want to go?</Text>
          <Input
            onChangeText={text => onChangeDestination(text)}
            value={destination}
            placeholder={'Baixa-Chiado'}
          />
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Button
            onPress={() => navigate('Routes')}
          >Find route</Button>
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Button appearance='outline'>Change preferences</Button>
        </Layout>
      </ScrollView>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools.
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionContainer: {
    paddingVertical: 8,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginVertical: 30,
  },
});

import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/index.js'
import Form from './src/components/Form/index.js'


export default function App() {

  const [isFontsLoaded ] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    paddingTop: 80,
  },
});

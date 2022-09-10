import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Vuong from './components/vuong';
export default function App() {
  return (
    <View style={styles.container}>
     <Vuong color='red'></Vuong>
     <Vuong color='orange'></Vuong>
     <Vuong color='yellow'></Vuong>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  square: {
    margin: 5,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

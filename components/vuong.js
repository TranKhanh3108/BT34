import { StyleSheet, Text, View } from 'react-native';

export default function Vuong({color}) {
  return (
      <View style={styles.square} backgroundColor={color}>
      <Text>Square</Text>
      </View>
  );
}
const styles = StyleSheet.create(
{
  square: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
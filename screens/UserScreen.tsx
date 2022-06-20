import { StyleSheet } from 'react-native';

import UserInfo from '../components/UserInfo';
import { Text, View } from '../components/Themed';
import CardPerfil from '../components/CardPerfil';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <CardPerfil />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

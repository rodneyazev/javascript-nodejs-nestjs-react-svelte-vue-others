import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native-web';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}
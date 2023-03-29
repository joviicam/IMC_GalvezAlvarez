import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import MainStack from './src/stacks/MainStack';
import Toast from "react-native-toast-message";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
    <MainStack/>
    <Toast/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <StatusBar />
        <View>
          <Home />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
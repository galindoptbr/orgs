import { SafeAreaView, StatusBar, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar />
        <View>
          <Home />
        </View>
      </SafeAreaView>
    </>
  );
}

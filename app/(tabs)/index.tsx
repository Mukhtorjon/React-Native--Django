import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { MyDrawer } from "../../navigation/drawer";

export default function App() {
  const statusBarColor = "#323749"; // Status bar va notch uchun bir xil rang

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: statusBarColor }]}
    >
      <NavigationIndependentTree>
        <NavigationContainer>
          <StatusBar
            backgroundColor={statusBarColor}
            barStyle="light-content"
          />
          <MyDrawer />
        </NavigationContainer>
      </NavigationIndependentTree>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

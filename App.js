import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Components/HomePage";
import ImageDisplay from "./Components/ImageDisplay";
import ImageView from "./Components/ImageView";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lets Capture"
          component={HomePage}
          options={{ title: "Capture Moments" }} // Customize the header title
        />
        <Stack.Screen name="Your Pics" component={ImageDisplay} />
        <Stack.Screen name="imageView" component={ImageView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

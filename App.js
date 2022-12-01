import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Signup from "./src/Signup";
import Login from "./src/Login";
import { SafeAreaView, Text } from "react-native";
import Quiz from "./app/screens/Quiz";
import Type from "./src/Type";
import QuizSong from "./app/screens/QuizSong";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Type" component={Type} />
        {/* <Stack.Screen name="QuizSong" component={QuizSong} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

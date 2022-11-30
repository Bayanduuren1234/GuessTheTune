import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";
import Btn from "./Btn";

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64, left: 60 }}>Guess</Text>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            marginBottom: 40,
            left: 10,
          }}
        >
          The Song
        </Text>
        <Btn
          bgColor="pink"
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor="pink"
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, pink } from "./Constants";

const Type = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "pink", fontSize: 64, left: 60 }}>Choose</Text>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            marginBottom: 40,
            left: 10,
          }}
        >
          Your Type
        </Text>
        <Btn
          bgColor="pink"
          textColor="white"
          btnLabel="Solo Player"
          Press={() => props.navigation.navigate("Quiz")}
        />
        <Btn
          bgColor="white"
          textColor="pink"
          btnLabel="MultiPlayer"
          Press={() => props.navigation.navigate("Multiplayer")}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Type;

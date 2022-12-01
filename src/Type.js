import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";
import Btn from "./Btn";

const Type = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 45, left: 10 }}>
          Тоглох хэлбэр
        </Text>
        <Text
          style={{ color: "white", fontSize: 45, left: 90, marginBottom: 80 }}
        >
          сонгох
        </Text>
        <Btn
          bgColor="white"
          textColor="pink"
          btnLabel="Дууны үг таах"
          Press={() => props.navigation.navigate("Quiz")}
        />
        <Btn
          bgColor="white"
          textColor="pink"
          btnLabel="Дуучин таах"
          Press={() => props.navigation.navigate("QuizSong")}
        />

        <Btn
          bgColor="white"
          textColor="pink"
          btnLabel="Дууны ая таах"
          Press={() => props.navigation.navigate("Multiplayer")}
        />
        <Btn
          bgColor="white"
          textColor="pink"
          btnLabel="Найзтайгаа тоглох"
          Press={() => props.navigation.navigate("Multiplayer")}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Type;

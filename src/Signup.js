import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import Field from "./Field";

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: "bold",
            marginTop: 60,
            left: -20,
          }}
        >
          Бүртгүүлэх
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
            left: -20,
          }}
        >
          Шинээр бүртгэл үүсгэх
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 500,
            width: 390,
            marginRight: 50,
            marginLeft: 5,
            borderTopLeftRadius: 130,
            borderBottomRightRadius: 130,
            marginTop: 60,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Field placeholder="Овог" />
          <Field placeholder="Нэр" />
          <Field
            placeholder="Имэйл эсвэл Нэвтрэх нэр"
            keyboardType={"email-address"}
          />
          <Field placeholder="Дугаар" keyboardType={"number"} />
          <Field placeholder="Нууц үг" secureTextEntry={true} />
          <Field placeholder="Нууц үг давтах" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingRight: 16,
            }}
          ></View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
            }}
          ></View>

          <Btn
            textColor="white"
            bgColor="pink"
            btnLabel="Бүртгүүлэх"
            Press={() => {
              alert("Accoutn created");
              props.navigation.navigate("Login");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>
              Хэрэв та бүртгэлтэй бол ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "pink", fontWeight: "bold", fontSize: 16 }}>
                Нэвтрэх
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;

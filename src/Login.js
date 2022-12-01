import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import Field from "./Field";
const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 20,
            left: -20,
            marginTop: 80,
          }}
        >
          Нэвтрэх
        </Text>
        <View
          style={{
            marginTop: 60,
            backgroundColor: "white",
            height: 500,
            width: 390,
            marginRight: 50,
            marginLeft: 5,
            borderTopLeftRadius: 130,
            borderBottomRightRadius: 130,
            paddingTop: 60,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: "pink",
              fontWeight: "bold",
            }}
          >
            Тавтай морил
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Бүртгэлээрээ нэвтрэх
          </Text>
          <Field
            placeholder="Имэйл эсвэл Нэвтрэх нэр"
            keyboardType={"email-address"}
          />
          <Field placeholder="Нууц үг" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 90,
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 14 }}>
              Нууц үгээ мартсан уу?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor="pink"
            btnLabel="Нэвтрэх"
            Press={() => {
              props.navigation.navigate("Type");
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
              Бүртгэл үүсгэх үү ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={{ color: "pink", fontWeight: "bold", fontSize: 16 }}>
                Бүртгүүлэх
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;

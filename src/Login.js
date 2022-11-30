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
            marginTop: 50,
          }}
        >
          Login
        </Text>
        <View
          style={{
            marginTop: 80,
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
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email or Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 90,
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 14 }}>
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor="pink"
            btnLabel="Login"
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
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={{ color: "pink", fontWeight: "bold", fontSize: 16 }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;

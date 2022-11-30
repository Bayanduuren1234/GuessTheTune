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
          Register
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
          Create a new account
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
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Contact Number" keyboardType={"number"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
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
            btnLabel="Signup"
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
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "pink", fontWeight: "bold", fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import LogoImage from "../../assets/Logo.png";
import Bank from "../../assets/trans3.png";
import Bg from "../../assets/bg.png";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/user.context";
// import LinearGradient from "react-native-linear-gradient";

// import { LinearGradient } from "react-native-linear-gradient";
import LinearGradient from "react-native-linear-gradient";

const Welcome = () => {
  const { email, balance, FetchData, dataTx, setTx, FetchDataTx } =
    useContext(UserContext);
  const navigation = useNavigation();
  useEffect(() => {
    FetchData();
    FetchDataTx();
    if (email) {
      navigation.navigate("Dashboard");
    } else {
      // navigation.navigate("Get Sta");
    }
  }, []);

  return (
    <ImageBackground
      source={Bg}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title5}>Online Banking</Text>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.title}> {email}</Text>
        {/* <Text style={styles.title2}>Changing lives better</Text> */}
        <Text style={styles.title3}>
          Rijar banking is an online banking system that was designed to add
          value for money acquired in society by every one across the Globe
          through our online banking system by generating profits on a daily
          basis of 10% on every total amount invested or Deposited
        </Text>
        <Text style={styles.title3}>Starting from 50$.</Text>
        {!email ? (
          <View style={styles.bBtb}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Sign In")}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText2}>Sign up</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bBtb}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <Text style={styles.buttonText}>Continue to Dashboard</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* </View> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Make sure the image covers the entire container
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    height: 130,
    width: 180,
  },
  title5: {
    width: "100%",
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 30,
    color: "white",
    marginBottom: "10%",
    // fontWeight: "900",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 20,
    color: "white",
    marginBottom: "5%",
    // fontWeight: "900",
  },
  title3: {
    width: "100%",
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 12,
    color: "white",

    marginBottom: "5%",
    padding: 20,
    paddingBottom: 10,
    // fontWeight: "900",
  },
  bBtb: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    width: "70%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "white",
    width: "70%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "InterBold",
    color: "lightgrey",
    fontSize: 18,
  },
  buttonText2: {
    textAlign: "center",
    fontFamily: "InterBold",
    color: "black",
    fontSize: 18,
  },
});

export default Welcome;

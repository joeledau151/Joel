import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/user.context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bg from "../../assets/bg.png";

// import { AsyncStorage } from "@react-native-async-storage/async-storage";

const Login = () => {
  const { setEmail, FetchData, FetchDataTx } = useContext(UserContext);
  const navigation = useNavigation();

  const [email, setEmailx] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    // FetchData();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://rijarportal.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      alert("success");
      setEmail(email);
      await AsyncStorage.setItem("user", email);
      await AsyncStorage.setItem("password", password);
      FetchData();
      FetchDataTx();
      navigation.navigate("Dashboard");
      // Handle successful login, e.g., navigate to another screen.
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert("failed");
    }
  };

  return (
    <ImageBackground
      source={Bg}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>Hello </Text>
              <Text style={styles.logoText}>Sign In! </Text>
            </View>

            <View style={styles.attach}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Email Address ?</Text>

                <TextInput
                  placeholder="Enter Email Address"
                  placeholderTextColor="grey"
                  style={styles.inputField}
                  value={email}
                  onChangeText={setEmailx}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Password ?</Text>
                <TextInput
                  placeholder="Enter the Password"
                  placeholderTextColor="grey"
                  place
                  secureTextEntry
                  style={styles.inputField}
                  value={password}
                  onChangeText={setPassword}
                />
                <View>
                  <Text style={styles.forgot}>Forget password? </Text>
                </View>

                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handleLogin}
                >
                  <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.account}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text style={styles.bmtxt}>Don't have an account? </Text>
                <Text style={styles.bmtxt2}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  },
  logoContainer: {
    // backgroundColor: "green",
    padding: 30,
    paddingTop: "15%",
  },
  logoText: {
    fontFamily: "InterBold",
    fontSize: 20,
    color: "white",
  },
  attach: {
    position: "absolute",
    backgroundColor: "white",
    height: "85%",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 30,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },

  inputText: {
    fontFamily: "InterLight",
    fontSize: 13,
    // textAlign: "center",
    marginTop: 30,
  },
  inputField: {
    // backgroundColor: "lightgrey",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    width: "70%",
    padding: 8,
    // borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
    fontFamily: "InterLight",
  },
  signInButton: {
    backgroundColor: "brown",
    borderWidth: 2,
    borderColor: "white",
    width: "70%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  signInButtonText: {
    textAlign: "center",
    fontFamily: "InterBold",
    color: "white",
    fontSize: 18,
  },
  accountText: {
    position: "absolute",
    backgroundColor: "white",
    height: "75%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatBottm: {
    // backgroundColor: "green",
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 40,
  },
  bmtxt: {
    textAlign: "right",
    fontFamily: "InterLight",
  },
  bmtxt2: {
    textAlign: "right",
    fontFamily: "InterBold",
    fontSize: 14,
  },
  forgot: {
    textAlign: "right",
    fontFamily: "InterLight",
    marginBottom: "10%",
    color: "darkgreen",
  },
});

export default Login;

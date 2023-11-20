import React, { useState } from "react";
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
  Alert,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Bg from "../../assets/bg.png";

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [balance, setBalance] = useState("0");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.", [
        { text: "OK" },
      ]);
      return;
    }
    try {
      const response = await axios.post(
        "https://rijarportal.onrender.com/api/auth/register",
        {
          username,
          fullname,
          email,
          password,
          balance,
        }
      );
      console.log("Registration successful!", response.data);
      Alert.alert("Success", "Registration successful!", [{ text: "OK" }]);
      navigation.navigate("Sign In");

      // Handle successful registration, e.g., navigate to another screen.
    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Registration failed.", [{ text: "OK" }]);
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
              <View>
                <Text style={styles.logoText}>Create Your </Text>
                <Text style={styles.logoText}>Account! </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
                <Text style={styles.bmtxt}>Already have an account ? </Text>
                <Text style={styles.bmtxt2}>Sign in</Text>
              </TouchableOpacity>
            </View>

            {/* Username input */}
            <View style={styles.attach}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Username ?</Text>

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Enter Username"
                  style={styles.inputField}
                  value={username}
                  onChangeText={setUsername}
                />
              </View>

              {/* Fullname input */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Fullname ?</Text>

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Your Name"
                  style={styles.inputField}
                  value={fullname}
                  onChangeText={setFullname}
                />
              </View>

              {/* Email input */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Email ?</Text>

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Email Address"
                  style={styles.inputField}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* Password input */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Password ?</Text>

                <TextInput
                  placeholderTextColor="black"
                  placeholder=" "
                  secureTextEntry
                  style={styles.inputField}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handleRegister}
                >
                  <Text style={styles.signInButtonText}>Register</Text>
                </TouchableOpacity>
              </View>

              {/* Confirm Password input */}
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
    paddingTop: " 20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoText: {
    fontFamily: "InterBold",
    fontSize: 20,
    color: "white",
  },
  attach: {
    position: "absolute",
    backgroundColor: "white",
    height: "82%",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 30,
    width: "100%",
    // display: "none",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },

  inputText: {
    fontFamily: "InterLight",
    fontSize: 13,
    // textAlign: "center",
    marginTop: 10,
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
    fontSize: 14,
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
    color: "black",
    fontSize: 12,
  },
  bmtxt2: {
    textAlign: "right",
    fontFamily: "InterBold",
    fontSize: 15,
    color: "white",
  },
  forgot: {
    textAlign: "right",
    fontFamily: "InterLight",
    marginBottom: "10%",
    color: "darkgreen",
  },
  topx: {
    flexDirection: "row",
  },
  bmtxt: {
    color: "white",
  },
});

export default Register;

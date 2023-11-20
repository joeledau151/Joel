import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CardTx from "./Cards";
import { UserContext } from "../../contexts/user.context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [add, setAdd] = useState("");
  const { email, balance, FetchData, dataTx, ClearData, FetchDataTx } =
    useContext(UserContext);
  const navigation = useNavigation();
  useEffect(() => {
    FetchData();
    FetchDataTx();
    if (email) {
      // navigation.navigate("Dashboard");
    } else {
      navigation.navigate("Get Started");
    }
  }, []);

  async function logout() {
    try {
      alert("Success");
      await AsyncStorage.clear();
      ClearData();
      navigation.navigate("Get Started");
      alert("Log Out");
    } catch (error) {
      console.log(error);
    }
  }

  const checkAuthentication = async () => {
    try {
      const authToken = await AsyncStorage.getItem("user");
      setAdd(authToken);
      return authToken; // Returns null if token doesn't exist
    } catch (error) {
      console.error("Error reading authentication token:", error);
      return null;
    }
  };

  const sortedItems = dataTx.sort((a, b) => a.timex - b.timex);
  return (
    <View style={styles.container}>
      <View style={styles.Profile}>
        <Text
          style={{
            width: "100%",
            fontWeight: "900",
            textAlign: "center",
            fontFamily: "InterBold",
          }}
        >
          Profile
        </Text>
        <Icon
          name="account"
          color={"black"}
          size={50}
          style={{
            // backgroundColor: "white",
            borderRadius: 50,
            padding: 10,
            margin: 10,
          }}
        />
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "InterBold",
          }}
        >
          {email}
        </Text>
      </View>
      <View></View>
      <View style={styles.bott3}>
        <Text
          style={{
            fontFamily: "InterBold",
            fontSize: 13,
            textAlign: "center",
            marginTop: "20",
          }}
        ></Text>
        <View style={{ height: "70px" }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "InterRegular",
              fontSize: 12,
            }}
          >
            {" "}
            © 2023 Rijar online banking.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "InterRegular",
              fontSize: 12,
            }}
          >
            All Rights Reserved. Privacy Policy.{" "}
          </Text>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bott}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    top: 10,
  },
  text: {
    padding: 20,
    fontFamily: "InterBold",
    fontSize: 12,
    fontWeight: "bold",
  },
  bott: {
    // position: "absolute",
    // bottom: 10,
    width: "100%",
  },
  bott3: {
    // position: "absolute",
    marginBottom: 10,
    width: "100%",
    borderBottomColor: "lightgrey",
    borderTopWidth: 0.5,
    paddingTop: 10,
  },
  Profile: {
    // backgroundColor: "lightgrey",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // position: "absolute",
    width: "100%",
    backgroundColor: "brown",
    borderRadius: 10,
    bottom: 0,
    top: 10,
  },
  buttonText: {
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
    fontFamily: "InterLight",
    color: "white",
  },
});

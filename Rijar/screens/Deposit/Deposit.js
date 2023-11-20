import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
 
import CopyableInput from "./Address";
 

const Deposit = () => {
  const [userEmail, setUserEmail] = useState("");
  const trxAddress = "0x6DE3cC59152e19f108378984f45E20a34C9f6338";
  useEffect(() => {
    const getUserEmailFromStorage = async () => {
      // try {
      //   const userEmail = await AsyncStorage.getItem("userEmail");
      //   setUserEmail(userEmail);
      // } catch (error) {
      //   console.error("Error fetching user email:", error);
      // }
    };

    getUserEmailFromStorage();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text
          style={{
            width: "90%",
            fontFamily: "InterLight",
            // color: "grey",
            textAlign: "center",
            fontSize: 20,
            padding: 20,
            fontWeight: "bold",
          }}
        >
          Deposit Token{" "}
        </Text>
        <View>
          <CopyableInput value={trxAddress} email={userEmail} />
        </View>
        <Text
          style={{
            width: "90%",
            fontFamily: "InterRegular",
            color: "grey",
            textAlign: "center",
            color: "brown",
          }}
        >
          Send only TRX,USDT or BNB on this address. Sending any other coins or
          token to this address may result in loss of your deposit{" "}
        </Text>

        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    padding: 20,
    top: 0,
  },
  container: {
    alignItems: "center",
  },
  buttonSections: {
    top: 20,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // flex: "space-between",
    zIndex: 100,
    borderBottomColor: "lightgrey",
    // borderTopWidth: 0.5,
    // borderColor: "grey";
    // top: 100,
    // width: "80%",
    // left: "5%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    // width: "100%",
    // top: 100,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#2485E2",
    borderRadius: 10,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // flex: "space-between",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "InterMedium",
  },
  description: {
    width: "80%",
    textAlign: "center",
    fontFamily: "InterSemiBold",
    marginBottom: 70,
    color: "#e5e5e5",
  },
});

export default Deposit;

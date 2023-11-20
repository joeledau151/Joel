import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Lastest from "./Transactions";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/user.context";

const Home = () => {
  const {
    email,
    balance,
    FetchData,
    dataTx,
    subbal,
    setTx,
    FetchDataTx,
    timenow,
    currentBalance,
    setCurrentBalance,
  } = useContext(UserContext);

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

  useEffect(() => {
    const interval = setInterval(() => {
      // // Calculate the daily ROI
      // const dailyROI = calculateDailyROI(balance + subbal);
      // // Update the user's balance
      // setCurrentBalance((prevBalance) => prevBalance + dailyROI);
      // ------------------------------------------------------------------------------------------------------
      const depositTimestamp = timenow; // Replace with your actual deposit timestamp (milliseconds since Unix epoch)
      const depositAmount = parseFloat(balance); // Replace with your actual deposit amount
      const currentTimestamp = Date.now();
      const timeDiffMilliseconds = currentTimestamp - depositTimestamp;
      const timeDiffSeconds = timeDiffMilliseconds / 1000;
      const dailyInterestRate = 0.01; // 1% daily interest rate
      const compoundingFrequency = 1; // Compounded once per day
      const timeInDays = timeDiffSeconds / (60 * 60 * 24);

      const newBalance =
        depositAmount *
        Math.pow(
          1 + dailyInterestRate / compoundingFrequency,
          compoundingFrequency * timeInDays
        );

      const bal = parseFloat(newBalance).toFixed(5);
      setCurrentBalance(bal);
      // ------------------------------------------------------------------------------------------------------
    }, 1000); // Update every second
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentBalance, balance]);

  function calculateDailyROI(balance) {
    const dailyROI = (balance * 0.01) / 86400; // 1% daily ROI
    return dailyROI;
  }
  return (
    <View style={styles.Wallet}>
      <View style={styles.top}>
        <View>
          <Text style={styles.textOne}>RIJAR</Text>
          <Text style={(styles.textTwo, { fontFamily: "InterBold" })}>
            Changing lives better
          </Text>
        </View>
        <View>
          <Ionicons
            name="notifications"
            size={30}
            color="#900"
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      <View style={styles.walletBlue}>
        <Text
          style={
            (styles.Wallettext,
            { fontFamily: "InterBold", fontSize: 18, color: "white" })
          }
        >
          My Earnings
        </Text>
        <Text
          style={
            (styles.Wallettext2,
            {
              fontFamily: "InterBold",
              fontSize: 25,
              color: "white",
              marginTop: 10,
            })
          }
        >
          {currentBalance} USD
        </Text>
      </View>
      <View style={styles.buttonSections}>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("Wallet")}
          onPress={() => FetchData()}
        >
          <Ionicons
            name="download"
            size={25}
            color="#900"
            style={styles.btnicon}
          />
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => logout()}>
          <Icon name="download" size={20} color="#900" style={styles.btnicon} />
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      <Lastest />
    </View>
  );
};

const styles = StyleSheet.create({
  Wallet: {
    flex: 1,
  },
  top: {
    margin: 30,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walletBlue: {
    height: "15%",
    backgroundColor: "rgb(36, 133, 226)",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    // top: 20,
  },
  textOne: {
    fontSize: 20,
    fontFamily: "InterBold",
  },
  textTwo: {
    fontSize: 15,
    fontFamily: "InterLight",
    fontWeight: "bold",
  },
  Wallettext: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "InterBold",
    fontSize: 25,
    textTransform: "uppercase",
  },
  Wallettext2: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "InterLight",
    fontSize: 18,
    textTransform: "uppercase",
  },
  buttonSections: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 100,
    // top: 80,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#F5F5F5",
    backgroundColor: "white",
    borderRadius: 10,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "black",
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
  btnicon: {
    position: "absolute",
    left: 10,
  },
});

export default Home;

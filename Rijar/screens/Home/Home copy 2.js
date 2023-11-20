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
          <Text style={styles.textTwo}>Changing lives better</Text>
        </View>
        <View>
          <Ionicons
            name="notifications"
            size={20}
            color="grey"
            style={{ marginRight: 1 }}
          />
        </View>
      </View>
      <View style={styles.walletBlue}>
        <Text style={styles.Wallettext}>My Earnings</Text>
        <Text style={styles.balanceCount}>{currentBalance} TRX</Text>
      </View>
      <View style={styles.buttonSections}>
        <View style={styles.centertab}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Wallet")}
          >
            <Icon
              name="download"
              size={20}
              color="blue"
              style={styles.btnicon}
            />
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("Withdraw")}
          >
            <Icon
              name="download"
              size={20}
              color="brown"
              style={styles.btnicon}
            />
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.assestTab}>
        <Lastest />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wallet: {
    flex: 1,
    // backgroundColor: "black",
  },
  top: {
    padding: 30,
    paddingBottom: 5,
    paddingTop: 5,

    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "black",
    borderBottomColor: "#7f7f7f",
    borderBottomWidth: 1,
  },

  assestTab: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  textOne: {
    color: "purple",
    fontSize: 35,
    fontFamily: "InterBold",
  },
  textTwo: {
    color: "#7f7f7f",
    fontSize: 13,
    fontFamily: "InterLight",
  },
  walletBlue: {
    padding: 30,
    backgroundColor: "#0490c9",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
  },
  Wallettext: {
    color: "white",
    fontFamily: "InterLight",
  },
  balanceCount: {
    fontSize: 30,
    fontFamily: "InterLight",
    color: "white",
  },
  buttonText: {
    fontSize: 17,
    fontFamily: "InterBold",
    color: "grey",
  },
  buttonSections: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
  },
  button: {
    alignItems: "center",
    width: "50%",
  },
  button2: {
    alignItems: "center",
    width: "50%",
    borderLeftColor: "lightgrey",
    borderLeftWidth: 1,
  },
  centertab: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
  },
});

export default Home;

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import axios from "axios";
import { UserContext } from "../../contexts/user.context";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
// import QRCode from "react-native-qrcode-svg";
// import ZxingView from "react-native-zxing";

const Withdraw = () => {
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
    passowrd,
  } = useContext(UserContext);
  const [recipientAddress, setAddress] = useState("");
  const [amount, setAmt] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    FetchData();
    FetchDataTx();
  }, []);

  const handleOutsidePress = () => {
    Keyboard.dismiss();
  };

  const handleButtonPress = async () => {
    // const userEmail = await AsyncStorage.getItem("userEmail");

    // if (currentBalance < amount) {
    //   alert("Cannot withdraw more than the avaliable");
    // }

    try {
      const response = await axios.post(
        // "https://rijj.onrender.com/api/auth/Withdrawtoken",
        "https://rijarportal.onrender.com/api/auth/Withdrawtoken",

        {
          email: email,
          address: recipientAddress,
          amount: amount,
          pass: pass,
        }
      );
      // setWithdrawalStatus(response.data);
      alert("successful");
      console.error("Withdrawal Test:", response.data);
      setAddress("");
      setAmt("");
      FetchData();
    } catch (error) {
      console.error("Withdrawal failed:", error.message);
      // setWithdrawalStatus(null);
    }
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [recipientAddress, setRecipientAddress] = useState('');
  const [showScanner, setShowScanner] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setAddress(data);
    setShowScanner(false);
  };

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  if (hasPermission === null) {
    askForCameraPermission();
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Withdraw Token</Text>

        <Text style={styles.labelText}>Enter Tron Address</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Paste the address"
          value={recipientAddress}
          onChangeText={setAddress}
        />
        <View style={styles.addtr}>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => setShowScanner(true)}
          >
            {/* <FontAwesome name="qrcode" size={30} color="white" /> */}
          </TouchableOpacity>
          <FontAwesome
            name="qrcode"
            size={30}
            color="grey"
            style={styles.scabnn}
          />
        </View>
        <Text style={styles.labelText}>Enter Amount </Text>
        <View style={styles.amountContainer}>
          <TextInput
            style={styles.amountInput}
            placeholder="Enter Amount"
            value={amount}
            onChangeText={setAmt}
          />

          <Text style={styles.currencyText}>USDT </Text>
        </View>
        <View>
          <TextInput
            style={styles.amountInput}
            placeholder="Confirm Password"
            value={pass}
            onChangeText={setPass}
          />
        </View>
        <Text style={styles.labelText2}>
          Max : {parseInt(currentBalance)} USDT
        </Text>
        <Text style={styles.noteText}>
          Important note that all information provided below is correct.
          Incorrect information can lead to delays in your funds being
          transferred. {passowrd}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    margin: 20,
  },
  headerText: {
    fontFamily: "InterLight",
    fontSize: 20,
    marginBottom: 20,
  },
  addtr: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  qrCodeScanner: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  labelText: {
    fontFamily: "InterLight",
    marginBottom: 10,
  },
  labelText2: {
    fontFamily: "InterLight",
    marginBottom: 10,
    color: "brown",
  },
  inputField: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  amountContainer: {
    flexDirection: "row",
  },
  amountInput: {
    width: "80%",
    height: 35,
    backgroundColor: "lightgrey",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: "10%",
    textAlign: "center",
  },
  currencyText: {
    width: "20%",
    height: 40,
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlign: "center",
  },
  noteText: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize: 10,
  },
  button: {
    position: "absolute",
    width: "100%",
    backgroundColor: "green",
    borderRadius: 10,
    bottom: 0,
  },
  buttonText: {
    padding: 15,
    borderRadius: 20,
    textAlign: "center",
    fontFamily: "InterLight",
  },
  containerca: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "grey",
  },
  inputField: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  qrCode: {
    marginTop: 20,
  },
  scabnn: {
    position: "absolute",
    right: 20,
    top: -55,
  },
});

export default Withdraw;

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  // ToastAndroid,
  StyleSheet,
  Share,
} from "react-native";

import { UserContext } from "../../contexts/user.context";
import QRCode from "react-native-qrcode-svg";

import * as Clipboard from "expo-clipboard";

const CopyableInput = ({ value }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const { email, address, balance, FetchData } = useContext(UserContext);

  const CopyableInput = () => {
    // Clipboard.setString(value);
    // setCopySuccess(true);
    // ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
  };

  const handleCopyAddress = () => {
    Clipboard.setStringAsync(address); // Copy the address to the clipboard
    // alert("Address copied to clipboard");
  };

  const handleShareAddress = () => {
    Share.share({
      message: address,
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <View style={styles.mainPage}>
      {!address ? (
        <Text>Loading...</Text>
      ) : (
        <QRCode
          value={address}
          size={100} // Change the size of the QR code here
          color="black" // Change the color of the QR code here
          backgroundColor="white" // Change the background color of the QR code here
          style={{ marginBottom: "30%" }}
        />
      )}

      <View style={{ marginTop: "10%", alignItems: "center" }}>
        <Text style={styles.text}>Blockchain Network</Text>
        <Text style={styles.text2}>Tron Network</Text>
        {/* <Text style={styles.text}>Deposit Address</Text> */}
      </View>

      <View style={{ backgroundColor: "lightgrey", marginBottom: 20 }}>
        <View
          style={{
            marginBottom: 20,
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "InterBold",
              textAlign: "center",
            }}
          >
            {address}
          </Text>
        </View>
      </View>
      <View></View>
      <View style={styles.buttonSections}>
        <TouchableOpacity
          onPress={handleCopyAddress}
          style={styles.button}
          // onPress={() => navigation.navigate("Wallet")}
        >
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>

        {/* <Button title="Login" onPress={() => navigation.navigate("Login")} /> */}

        <TouchableOpacity
          onPress={handleShareAddress}
          style={styles.button}
          // onPress={() => navigation.navigate("Withdraw")}
        >
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "InterLight",
    marginBottom: 30,
  },
  copy: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    // width: "50%",
    padding: 10,
    width: "50%",
    marginLeft: "25%",
    borderRadius: 10,
  },
  text2: {
    fontFamily: "InterBold",
    marginBottom: 30,
    fontSize: 13,
    alignItems: "center",
    color: "brown",
  },
  mainPage: {
    // flex: 0.7,
    alignItems: "center",
  },
  buttonSections: {
    // top: 20,
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
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // flex: "space-between",
  },
  buttonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "InterMedium",
  },
});

export default CopyableInput;

import React, { PureComponent, useContext } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import TRX from "../../assets/trx.png";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the Font Awesome icon library
import { UserContext } from "../../contexts/user.context";
import axios from "axios";

const CardUser = ({ item, balance }) => {
  // const timestamp = parseInt(item.timex);
  // const date = new Date(timestamp);
  // const formattedDate = date.toLocaleDateString();
  // const formattedTime = date.toLocaleTimeString();
  const { FetchuSERS } = useContext(UserContext);
  // const navigation = useNavigation();
  const changeUser = async (a, b, c) => {
    try {
      const response = await axios.post(
        "https://rijarportal.onrender.com/api/auth/modify",
        {
          _id: a,
          key: "vvvvxxxmsmskdklflg",
          change: c,
        }
      );
      console.log("Disabled successful!", response.data);
      Alert.alert("Success", "Disabled!", [{ text: "OK" }]);
      // navigation.navigate("Sign In");
      FetchuSERS();

      // Handle successful registration, e.g., navigate to another screen.
    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Registration failed.", [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 0, width: "70%" }}>
        <Text
          style={
            (styles.text,
            {
              textAlign: "left",
              fontFamily: "InterBold",
              fontSize: 17,
            })
          }
        >
          {item.username}
        </Text>

        {item.type !== "Deposit" ? (
          <Text
            style={
              (styles.text,
              {
                textAlign: "left",
                fontFamily: "InterBold",
                fontSize: 13,
                color: "brown",
                // fontWeight: "bold",

                // width: "40%",
              })
            }
          >
            {item.email}
          </Text>
        ) : (
          <Text
            style={
              (styles.text,
              {
                textAlign: "left",
                fontFamily: "InterBold",
                fontSize: 13,
                color: "green",
                // fontWeight: "bold",

                // width: "40%",
              })
            }
          >
            {item.address}
          </Text>
        )}
        <Text>{item.address}</Text>
      </View>
      <View style={{ paddingLeft: 0, width: "30%" }}>
        <Text
          style={
            (styles.text,
            { textAlign: "center", fontFamily: "InterBold", fontSize: 17 })
          }
        >
          {parseInt(item.balance)}
        </Text>

        <View style={styles.logoCoin}>
          <Image source={TRX} style={styles.logo} resizeMode="contain" />
        </View>
        <Text
          style={
            (styles.text,
            { textAlign: "center", fontFamily: "InterRegular", fontSize: 10 })
          }
        >
          {/* ~ {item.type} */}
        </Text>

        {item.sbal == "true" ? (
          <Icon
            name="refresh"
            size={30}
            color="grey"
            style={styles.delete2}
            onPress={() => changeUser(item._id, "vvvvxxxmsmskdklflg", "false")}
          />
        ) : (
          <Icon
            name="trash"
            size={30}
            color="grey"
            style={styles.delete2}
            onPress={() => changeUser(item._id, "vvvvxxxmsmskdklflg", "true")}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5,
  },
  logo: {
    width: 30,
    height: 30,
    // marginLeft: "50%",
  },
  logoCoin: {
    position: "absolute",
    left: 0,
  },
  delete: {
    position: "absolute",
    right: 25,
  },
  delete2: {
    position: "absolute",
    right: -10,
  },
  text: {
    fontFamily: "InterSemiBold",
    textTransform: "capitalise",
  },
});

export default CardUser;

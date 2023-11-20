import React from "react";
import { BackHandler, Image, StyleSheet, Text, View } from "react-native";

const Cards = ({ item, balance, amount }) => {
  return (
    <View style={item.amount == true ? styles.container : styles.container1}>
      <View style={styles.logoCoin}>
        <Image source={item.img} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={{ paddingLeft: "10%" }}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text2}>{item.full}</Text>
      </View>
      <View>
        <Text style={styles.text}>
          {item.amount == true ? (balance * 1).toFixed(5) : 0}
        </Text>
        <Text style={styles.textg}>
          {/*~ {balance ? (balance * 0.006227).toFixed(2) : 0} USD*/}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5,
  },
  container1: {
    top: 0,
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5,
    opacity: 0.3,
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoCoin: {
    position: "absolute",
    left: 0,
  },
  text: {
    fontFamily: "InterRegular",
    textTransform: "capitalise",
    color: "black",
    fontSize: 15,
  },
  textg: {
    fontFamily: "InterRegular",
    textTransform: "capitalise",
    color: "green",
    fontSize: 15,
  },
  text2: {
    fontFamily: "InterRegular",
    textTransform: "capitalise",
    color: "grey",
    fontSize: 12,
  },
});

export default Cards;

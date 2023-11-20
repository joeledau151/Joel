import React, { PureComponent } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import TRX from "../../assets/trx.png";

const CardTx = ({ item, balance }) => {
  const timestamp = parseInt(item.timex);
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 30, width: "60%" }}>
        {item.type !== "Deposit" ? (
          <View>
            <Text
              style={
                (styles.text,
                {
                  textAlign: "left",
                  fontFamily: "InterBold",
                  fontSize: 14,
                  color: "red",
                })
              }
            >
              {formattedDate} | {formattedTime}
            </Text>

            <Text
              style={
                (styles.text,
                {
                  textAlign: "left",
                  fontFamily: "InterBold",
                  fontSize: 10,
                  color: "brown",
                  // fontWeight: "bold",

                  // width: "40%",
                })
              }
            >
              {item.tx.slice(0, 12) + "..."}
            </Text>
          </View>
        ) : (
          <View>
            <Text
              style={
                (styles.text,
                {
                  textAlign: "left",
                  fontFamily: "InterBold",
                  fontSize: 10,
                  color: "green",
                })
              }
            >
              {formattedDate} | {formattedTime}
            </Text>

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
              {item.tx.slice(0, 12) + "..."}
            </Text>
          </View>
        )}
      </View>
      <View style={{ paddingLeft: 0, width: "30%" }}>
        <Text
          style={
            (styles.text,
            { textAlign: "center", fontFamily: "InterBold", fontSize: 17 })
          }
        >
          {item.amount}
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
          ~ {item.type}
        </Text>
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
    left: -10,
  },
  text: {
    fontFamily: "InterSemiBold",
    textTransform: "capitalise",
  },
});

export default CardTx;

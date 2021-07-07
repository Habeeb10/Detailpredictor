import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as colors from "../component/common/colors";

export const Modalinput = ({ style, value, title }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.input}>{`${title}${value}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.wheat,
    alignSelf: "center",
    width: "70%",
    borderRadius: 10,
    height: 55,
    marginTop: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "skyblue",
  },
  input: {
    fontSize: 16,
    marginLeft: 15,
    width: "100%",
  },
});

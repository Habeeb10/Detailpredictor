import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as colors from "../component/common/colors";

export const Input = ({
  placeHolder,
  style,
  label,
  inputStyle,
  type,
  onChange,
  secure,
  value,
}) => {
  return (
    <View style={{ marginTop: 40 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, style]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor={colors.deepgray}
          value={value}
          keyboardType={type}
          onChangeText={onChange}
          secureTextEntry={secure}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.wheat,
    alignSelf: "center",
    width: "90%",
    borderRadius: 10,
    height: 55,
    marginTop: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    color: colors.deepblue,
    marginLeft: 15,
    width: "100%",
  },
  label: {
    fontWeight: "500",
    fontSize: 20,
    color: colors.deepblue,
    marginLeft: 25,
    marginTop: 25,
  },
});

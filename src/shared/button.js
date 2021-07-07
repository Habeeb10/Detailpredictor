import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as colors from "../component/common/colors";

export const Button = ({
  title,
  onPress,
  style,
  titleStyle,

  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.container, style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color="white"
          style={{ marginTop: 10 }}
        />
      ) : (
        <Text style={[styles.button, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 56,
    backgroundColor: "skyblue",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    color: colors.deepblue,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
});

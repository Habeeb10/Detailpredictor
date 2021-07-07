import { StyleSheet } from "react-native";
import * as colors from "../../../component/common/colors";

export const Detailpredictorstyles = StyleSheet.create({
  details: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: "center",
    color: colors.deepblue,
  },
  exitbox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "skyblue",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  modalBox: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 340,
    width: "100%",
  },
  button: {
    marginTop: 50,
    width: "90%",
    marginTop: 60,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "skyblue",
  },
  predict: {
    textAlign: "center",
    width: 360,
    alignSelf: "center",
    marginTop: 40,
    color: colors.deepgrey,
    fontSize: 18,
  },
  detail: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 50,
    color: colors.deepblue,
  },
});

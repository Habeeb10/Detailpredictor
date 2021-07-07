import React, { useState } from "react";
import { Container } from "../../component/container";
import { Button } from "../../shared/button";
import { Input } from "../../shared/input";
import { Detailpredictorstyles as styles } from "../detailpredictor/utils/styles";
import { Text, View, TouchableOpacity } from "react-native";
import { Exit } from "../../../assets/svg";
import Modal from "react-native-modal";
import { Modalinput } from "../../shared/modalinput";

export default function Detailpredictor() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [modalState, setModalState] = useState(false);

  function Submit() {
    if (!name) {
      return null;
    } else {
      setLoading(true);
      const firstAPICall = fetch(`https://api.agify.io?name=${name}`);
      const secondAPICall = fetch(`https://api.genderize.io?name=${name}`);
      const thirdAPICall = fetch(`https://api.nationalize.io?name=${name}`);

      Promise.all([firstAPICall, secondAPICall, thirdAPICall])
        .then((values) => Promise.all(values.map((value) => value.json())))
        .then(([firstAPIResp, secondAPIResp, thirdAPIResp]) => {
          setDetails({
            age: firstAPIResp.age,
            gender: secondAPIResp.gender,
            country: thirdAPIResp.country[0].country_id,
          });
          console.log({ firstAPIResp, secondAPIResp, thirdAPIResp });
        }).finally;
      setTimeout(() => {
        setModalState(true);
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <>
      <Container>
        <Text style={styles.detail}>Detail Predictor</Text>
        <Text style={styles.predict}>
          This app predicts your details by just asking for your name feel free
          to try it out.
        </Text>
        <Input
          label="Name"
          style={styles.input}
          onChange={setName}
          value={name}
        />
        <Button
          title="Submit"
          style={styles.button}
          onPress={() => Submit()}
          loading={loading}
        />
        <View>
          <Modal
            visible={modalState}
            style={{ marginHorizontal: 0, backgroundColor: "rgba(0,0,0,.3)" }}
            coverScreen
          >
            <View style={{ height: 300 }}>
              <View style={styles.modalBox}>
                <Text style={styles.details}>Your predicted details</Text>
                <Modalinput title="Age : " value={details.age} />
                <Modalinput title="Gender : " value={details.gender} />
                <Modalinput title="Country : " value={details.country} />
                <TouchableOpacity
                  style={styles.exitbox}
                  onPress={() => {
                    setModalState(false);
                    setName("");
                  }}
                >
                  <Exit />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </Container>
    </>
  );
}

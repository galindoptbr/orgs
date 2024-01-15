import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { loadTop } from "../../../service/loadeData";

import logoTop from "../../../assets/logo.png";

class Top extends React.Component {
  state = {
    top: {
      boasVindas: "",
      legenda: "",
    },
  };

  attTop() {
    const returnTop = loadTop();
    this.setState({ top: returnTop });
  }

  componentDidMount() {
    this.attTop();
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Image style={styles.top} source={logoTop} />
          <Text style={styles.boasVindas}>{this.state.top.boasVindas}</Text>
          <Text style={styles.legenda}>{this.state.top.legenda}</Text>
        </View>
      </>
    );
  }
}

export default Top;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F2",
    padding: 16,
  },

  top: {
    width: 70,
    height: 28,
  },

  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

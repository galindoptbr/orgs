import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import logoTop from "../../../assets/logo.png";

export default function Top() {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.top} source={logoTop} />
        <Text style={styles.boasVindas}>Ola Galindo</Text>
        <Text style={styles.legenda}>Encontre os melhores produtores!</Text>
      </View>
    </>
  );
}

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

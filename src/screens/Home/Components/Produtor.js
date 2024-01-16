import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Produtor({ nome, image, distance, stars }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} accessibilityLabel={nome} />
      <View style={styles.infoCard}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F0F2",
    marginVertical: 8,
    marginHorizontal: 18,
    padding: 8,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },

  image: {
    width: 65,
    height: 65,
    marginRight: 24,
  },

  infoCard: {
    flexDirection: "row",
  },

  nome: {
    fontSize: 14,
  },

  distance: {
    position: "absolute",
    left: 200,
    color: "#B0B7BF",
  },
});

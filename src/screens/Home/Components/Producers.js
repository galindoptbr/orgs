import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { loadProducers } from "../../../service/loadeData";
import Produtor from "./Produtor";

export default function Producers({ top: Top }) {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const returnProducers = loadProducers();
    setTitulo(returnProducers.titulo);
    setLista(returnProducers.lista);
  }, []);

  const TopList = () => {
    return (
      <>
        <Top />
        <Text style={styles.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => <Produtor {...item} />}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={TopList}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
  },
});

import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image3StackStack}>
        <View style={styles.image3Stack}>
          <Image
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Image
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("../../assets/osp.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.text}>
            En 1669 : Extraction du phosphore pour la première fois de l’urine
            humaine par l’alchimiste allemand de Hambourg Henning Brandt. {"\n"}
            En 1769 : découverte du phosphore dans les os par le chimiste
            suédois Carl Wilhelm Scheele{"\n"}En 1850 : début d’exploitation des
            premiers gisements européens.{"\n"}En 20ème siècle : découverte de
            gros gisement en Amérique et en Afrique.
          </Text>
        </View>
        <View style={styles.rect}>
          <Text style={styles.historique}>HISTORIQUE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(191,212,158,1)"
  },
  image3: {
    left: 964,
    width: 899,
    height: 557,
    position: "absolute",
    top: 348
  },
  image2: {
    top: 55,
    left: 838,
    position: "absolute",
    height: 0,
    width: 0,
    opacity: 0
  },
  image4: {
    top: 0,
    left: 841,
    width: 454,
    height: 200,
    position: "absolute",
    backgroundColor: "rgba(81,118,40,1)"
  },
  text: {
    top: 448,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 37
  },
  image3Stack: {
    top: 0,
    left: 0,
    width: 2160,
    height: 905,
    position: "absolute"
  },
  rect: {
    top: 228,
    left: 881,
    width: 375,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(241,245,236,1)",
    borderWidth: 1,
    borderColor: "rgba(66,110,12,1)",
    borderStyle: "solid"
  },
  historique: {
    fontFamily: "roboto-700italic",
    color: "rgba(29,43,24,1)",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 5,
    marginLeft: 42
  },
  image3StackStack: {
    width: 2160,
    height: 905,
    marginTop: 58,
    marginLeft: -861
  }
});

export default Untitled1;

 
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Square from "./Square";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GameBoard = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const score = useSelector((state) => state);

  useEffect(() => {
    if (!timeLeft) return;
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Grass_Type.png")}
    >
      <View>
        <Image source={require("../assets/pokemon_font.png")}
        style={{top:90}}></Image>
      </View>
      <Text style={styles.time}>Time Remaining : {timeLeft} seconds</Text>
      <Text style={styles.score}>Your Smashed : {score.score} Moles!</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  game: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
  },
  time: {
    marginBottom: 10,
    marginTop: 90,
    fontWeight: "bold",
    fontSize:20,
    color:'red'
  },
  score:{
    fontWeight: "bold",
    fontSize:20,
    color:'yellow'
  }
});

export default GameBoard;

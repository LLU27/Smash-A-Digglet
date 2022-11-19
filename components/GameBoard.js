import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Square from "./Square";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearScore } from "../redux/scoreReducer";

const GameBoard = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const score = useSelector((state) => state);
  const [isGameOver, setGameOver] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!timeLeft) {
      return setGameOver(true);
    } else {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  function restartGame() {
    setGameOver(false);
    setTimeLeft(10);
    dispatch(clearScore())
  }

  return !isGameOver ? (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Grass_Type.png")}
    >
      <View>
        <Image
          source={require("../assets/pokemon_font.png")}
          style={{ top: 90 }}
        ></Image>
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
  ) : (
    <View style={styles.gameOverContainer}>
      <Image source={require("../assets/gameover.png")}></Image>
      <Text style={styles.finalScore}>You Smashed {score.score} Moles!</Text>
      <TouchableOpacity style={styles.restartBtn} onPress={restartGame}>
        <Image source={require("../assets/playagain.png")}></Image>
      </TouchableOpacity>
    </View>
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
    fontSize: 20,
    color: "red",
  },
  score: {
    fontWeight: "bold",
    fontSize: 20,
    color: "yellow",
  },
  gameOverContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  finalScore: {
    color: "yellow",
    fontSize: 20,
  },
  restartBtn: {
    backgroundColor: "yellow",
    margin: 20,
  },
  playAgain: {
    fontSize: 30,
  },
});

export default GameBoard;

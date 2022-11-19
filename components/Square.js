import { View, StyleSheet, TouchableOpacity,Image} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addScore } from "../redux/scoreReducer";


const Square = () => {
  const [moleActive, setMoleActive] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const randomTime = Math.random() * 20000;
  let timerId;
  const score = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      //after .8 second setMole to false
      setTimeout(() => {
        setMoleActive(false);
      }, 1000);
    }, randomTime);
    //callback endGame function after 60sec
    setTimeout(endGame, 10 * 1000);
  }, []);

  function endGame() {
    clearInterval(timerId);
    setGameOver(true);
  }

  const onPress = () => {
    dispatch(addScore())
  }

  return (
    <TouchableOpacity onPress={moleActive ? onPress : null}>
      <Image source={moleActive ? require("../assets/diglet.png"):require("../assets/hole.png")}
       style={moleActive ? styles.mole : styles.square}>
      </Image>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "#rgba(0, 0, 0, 0)",
    width:'100%',
    marginTop:68,
  },
  mole: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "#rgba(0, 0, 0, 0)",
    width:'100%',
    marginTop:70,
  },

});


export default Square;

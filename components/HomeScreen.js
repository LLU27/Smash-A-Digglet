import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { startGame } from "../redux/gameStatus";
import { useDispatch, useSelector } from "react-redux";


const HomeScreen = () => {
  const dispatch = useDispatch();
  const [sound, setSound] = useState();
  const backgroundSound = require('../assets/pokemon-battle.mp3')

  useEffect(() => {
    const sound = new Audio.Sound()
    const unloadSound = async()=>{
      if(sound){
      await sound.unloadAsync()
      }
    }
    const loadSound = async()=>{
      try{
        await sound.loadAsync(backgroundSound)
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
        setSound(sound)
      }catch(err){
        console.log(err)
      }
    }
    loadSound()
    unloadSound()
  },[])


  

  function startGameHandler() {
    console.log("this makes true start game");
    dispatch(startGame());
  }

  return (
    <View style={styles.startGameContainer}>
      <TouchableOpacity onPress={startGameHandler}>
        <Image source={require("../assets/smash.png")}></Image>
      </TouchableOpacity>
    </View>
  );
  }


const styles = StyleSheet.create({
  startGameContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

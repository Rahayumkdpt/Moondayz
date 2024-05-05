import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Cewek from '../../assets/icon/Cewek.jpg';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={Cewek} style={styles.image} />
      <Text style={styles.text}>MOONDAYZ</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BA55D3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold', 
    color: '#000000', 
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

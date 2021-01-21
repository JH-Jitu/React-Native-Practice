// import { StatusBar } from 'expo-status-bar';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View, Alert, Platform, StatusBar, Dimensions } from 'react-native';

export default function App() {
  console.log("App running smoothly");

  const handlePress = () => {
    console.log("Press");
  }
  // console.log(useDimensions());   // =>> To get the device dimensions
  // console.log(useDeviceOrientation());   =>> To know the device orientation means it is in portrait mode or in landscape mode!
  // console.log(Dimensions.get("window"));

  const { landscape } = useDeviceOrientation();

  let x = 1;
  return (
    <View style={styles.container}>
      <Text style={styles.txt} id="test" onPress={handlePress}>Hello World, I am Jitu! </Text>

      {/* <TouchableNativeFeedback  //Touchable native feedback only support in Android. It's an effect. */}
      {/* > */}
      {/* <View style={{ backgroundColor: "darkblue", width: "150" }}></View> */}
      <View style={{ width: "100%", height: landscape ? "100%" : "30%", flex: 1, backgroundColor: "red" }} />
      <View style={{ width: "100%", height: landscape ? "100%" : "30%", flex: 1, backgroundColor: "black" }} />
      <View style={{ width: "100%", height: landscape ? "100%" : "30%", flex: 1, backgroundColor: "white" }} />



      {/* </TouchableNativeFeedback> */}
      {/* Prompt Button Practice */}
      <Button color="black" title="Prompt practice"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text)) //Not works on Android the alternatives are these: 
          // 1. https://www.npmjs.com/package/react-native-prompt-crossplatform  
          // 2. https://github.com/shimohq/react-native-prompt-android
        }
      />

      {/* Alert Button practice */}
      <Button
        title="Alert Practice" color="orange"
        style={{ backgroundColor: "blue", paddingTop: "50px" }}
        onPress={() => Alert.alert("My title", "My message",
          [
            { text: "Yes", onPress: () => console.log("Yes Clicked") },
            { text: "No", onPress: () => console.log("No Clicked") },
          ])} />
      <TouchableWithoutFeedback //Touchable without feedback is also an effect.
        onPress={() => alert("image touched")}
      >
        <Image
          // blurRadius={1}   => uses to blur the image
          // fadeDuration={1000} => make a fade and it's durat ion
          //source={require('./assets/icon.png')} => use to add local images to the app
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}  // => use to set url of the Image
        />

      </TouchableWithoutFeedback>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    // alignItems: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    color: "darkblue",
  },
});

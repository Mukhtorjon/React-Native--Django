import { Image, StyleSheet, Platform } from 'react-native';
import { View, Text, ImageBackground} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/MkyJalL.jpeg")} blurRadius={0.5} style= {styles.image}>
      
      <Text style={styles.text}>
        First React Native
        Salom Mukhtor
      </Text>
      <Text onPress={() => alert("Xabar jonatilyapti")}>Mukhtor</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  text: {
    color:"white",
    fontSize:30
    
  },
  image:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  clickableText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/splash.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Hello Kitty ToDoList</Text>
        <Text style={styles.text}>Monte sua lista de tarefas e não esqueça mais o que precisa fazer durante o dia!</Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc1d5',
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover'
  },
  content: {
    flex: 1,
    backgroundColor: "#fa8fb1",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#f74780',
    borderRadius: 50,
    bottom: '15%',
    paddingVertical: 10,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
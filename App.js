import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
export default function App() {
return (
<View style={styles.container}>
<Text style={styles.paragraph}>Setembro Amarelo</Text>
<Card>
<Image style={styles.img}source={require('./s.amarelo6.jpg')} />
<Text style={styles.paragraph}> Mês de prevenção ao suicídio. A cada 45 minutos, um brasileiro tira a própria vida. No mundo, acontece um suicídio a cada 40 segundos: um milhão de vidas que poderiam ser salvas com a abordagem e acolhimento adequados ainda nos primeiros sinais de alerta.</Text>
</Card>
</View>
);


}
const styles = StyleSheet.create({
container: {
flex: 25,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#F2F2F2',
padding: 25,


},
paragraph: {
margin: 24,
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
color: '#FFFF00',
},
});
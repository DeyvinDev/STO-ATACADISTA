//imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

//componente principal
//retorna o que é renderizado na tela (template de jsx)
export default function App() {
  //logica do componente 
  function alerta(){
    alert("É GOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL DO BOLSONAROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!")
  }  
  //retorno com jsx
  return (

    <ScrollView>
    <View style={styles.container}>
      {/* codigo js */}
      <Text style={styles.textogrande}>A JORNADA DE JAIIR</Text>
      <StatusBar style="auto" />

      <Text style={styles.textopequeno}>A Chegada ao Gigante da Colina</Text>
    

      <Image
      source={{uri:"https://www.netvasco.com.br/news/noticias16/arquivos/20181116-220706-2-.jpg"}}

      style={{
        height: 150,
        width: 150,
        
      }}/>
      <Text style={styles.textolegenda}>E agora, galera! É ele, o ex-presidente, Jair Bolsonaro, pisando no gramado de São Januário! O estádio vai à loucura com essa contratação de peso! Vamos ver o que vem por aí nessa jornada histórica!</Text>
      <Text style={styles.textopequeno}>A Conquista do Amor da Torcida</Text>
  
      <Image
      source={require('./Imagens/bosotorcida.avif')}
      style={{
        height: 150,
        width: 300
      }}/>
            <Text style={styles.textolegenda}>A torcida explode em aplausos, o amor é visível no ar! Bolsonaro é recebido com entusiasmo, o sentimento é de paixão e respeito, uma conexão forte com o Vasco que transcende o futebol. É a torcida mostrando que o apoio vai além das quatro linhas!</Text>
            <Text style={styles.textopequeno}>FÍSICO DE ATLETA</Text>

      <Image
      source={require('./Imagens/boso.jpg')}
      style={{
        height: 200,
        width: 200
      }}/>
            <Text style={styles.textolegenda}>Olha a presença de Bolsonaro, galera! O ex-presidente chega com aquele físico imponente, mostrando que o tempo não passou em vão! Força, garra e muita determinação estampados em cada passo. A torcida vibra, é o peso da experiência e a energia de quem ainda tem muito a dar!</Text>
            <Text style={styles.textopequeno}>Habilidades em Campo</Text>

      <Image
      source={require('./Imagens/bosozagueiro.jpg')}
      style={{
        height: 150,
        width: 300
      }}/>
            <Text style={styles.textolegenda}>E olha a atuação de Bolsonaro, galera! Uma performance de zagueiro de tirar o chapéu! Com muito posicionamento, firmeza e coragem, ele não dá brecha pro adversário. Cada bola afastada é um grito de alívio da torcida! O cara realmente sabe se defender, é uma muralha!</Text>
            
            <Text style={styles.textopequeno}>BEM VINDO!!!!</Text>

      <Image
      source={require('./Imagens/bosovasco.jpg')}
      style={{
        height: 400,
        width: 400
      }}/>   
      
      

<Button color='#E52020' title='FAÇA DO BOLSONARO GOLEAR' onPress={alerta}></Button>
    </View>
       
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  textogrande: {
    fontSize: 40,
    fontWeight: 800,
    fontStyle: 'italic',
    color: 'black'
  },
  textopequeno: {
    fontSize: 50,
    fontWeight: 250,
    fontStyle: 'italic',
    color: 'black',
    alignContent: 'center'
  },
  textolegenda: {
    fontSize: 10,
    fontWeight: 150,
    fontStyle: 'italic',
    color: 'black',
    alignContent: 'center'
  }

});


import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Series(props) {



    const {nome,ano, diretor, tipo,capa} = props

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Serie</Text>

      <Text style={styles.texto}>NOME:{nome}</Text>
      <Text style={styles.texto}>ANO:{ano}</Text>
      <Text style={styles.texto}>DIRETOR:{diretor}</Text>
      <Text style={styles.texto}>TEMPORADAS:{tipo}</Text>
      <Image
      source={{
        uri: capa
      }}
       style= {{
        height:280,
        width:280
      }}
      />


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'gray',
        padding:20,
        borderWidth:10
    },
    texto:{
        fontSize:20,
        fontWeight:500
    }
})
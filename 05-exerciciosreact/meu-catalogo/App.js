import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './Componentes/Filmes';
import Series from './Componentes/Series';



export default function App() {
  const listaFilmes = [
    {
      "nome": "O Senhor dos Anéis: A Sociedade do Anel",
    "ano": 2001,
    "diretor": "Peter Jackson",
    "tipo": "Aventura, Fantasia",
    "capa": "https://i.pinimg.com/736x/b6/cd/0d/b6cd0d2e1d05b2e7de483eca10cb1f72.jpg"
    },
    {
      "nome": "Matrix",
    "ano": 1999,
    "diretor": "Lana Wachowski, Lilly Wachowski",
    "tipo": "Ação, Ficção Científica",
    "capa": "https://i.pinimg.com/236x/ec/3d/28/ec3d28f7736a189109c7b0050b07c420.jpg"
    },
    {
      "nome": "O Poderoso Chefão",
    "ano": 1972,
    "diretor": "Francis Ford Coppola",
    "tipo": "Crime, Drama",
    "capa": "https://i.pinimg.com/236x/24/09/48/24094834939c3b1ba5879d62e2abcae5.jpg"
    },
    {
      "nome": "Titanic",
    "ano": 1997,
    "diretor": "James Cameron",
    "tipo": "Drama, Romance",
    "capa": "https://i.pinimg.com/236x/ea/3a/ae/ea3aaeb6fec6c6213df3ab1472c7e5a2.jpg"
    }
  ];
  const listaSeries = [
    {
      "nome": "Stranger Things",
      "ano": 2016,
      "diretor": "The Duffer Brothers",
      "temporadas": "Drama, Terror, Ficção Científica",
      "capa": "https://i.pinimg.com/236x/91/17/75/9117751636528b25a7b4687cab63572d.jpg"
    },
    {
      "nome": "Game of Thrones",
      "ano": 2011,
      "diretor": "David Benioff, D.B. Weiss",
      "temporadas": "Drama, Fantasia",
      "capa": "https://i.pinimg.com/236x/29/50/d3/2950d35edaf94a68825431d1335ea06d.jpg"
    },
    {
      "nome": "Breaking Bad",
      "ano": 2008,
      "diretor": "Vince Gilligan",
      "temporadas": "Crime, Drama, Thriller",
      "capa": "https://i.pinimg.com/236x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg"
    },
    {
      "nome": "Friends",
      "ano": 1994,
      "diretor": "David Crane, Marta Kauffman",
      "temporadas": "Comédia, Romance",
      "capa": "https://i.pinimg.com/236x/8c/9c/cf/8c9ccfcf9a675bc749978b2ed623eb29.jpg"
    },
    {
      "nome": "The Crown",
      "ano": 2016,
      "diretor": "Peter Morgan",
      "temporadas": "Drama, História",
      "capa": "https://i.pinimg.com/236x/10/fb/be/10fbbe0bf276b7b74f1c9a1cc84ee92e.jpg"
    },
    {
      "nome": "The Mandalorian",
      "ano": 2019,
      "diretor": "Jon Favreau",
      "temporadas": "Ação, Aventura, Ficção Científica",
      "capa": "https://i.pinimg.com/236x/49/7b/8b/497b8bdd152ea05fce5654a0b8c799f7.jpg"
    }
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          listaFilmes.map(
            filmes => {
              return [
                <Filmes
                  nome={filmes.nome}
                  ano={filmes.ano}
                  diretor={filmes.diretor}
                  tipo={filmes.tipo}
                  capa={filmes.capa}

                />
              ]
            }
          )

        }
        {
          listaSeries.map(
            series => {
              return [
                <Series
                  nome={series.nome}
                  ano={series.ano}
                  diretor={series.diretor}
                  tipo={series.tipo}
                  capa={series.capa}

                />
              ]
            }
          )

        }


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


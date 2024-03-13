import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (

  <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Projeto: Adoção de Animais</Text>

      <Text style={styles.title}>Resumo</Text>
      <Text style={styles.text}>
        O abandono de animais é um problema significativo no Brasil, com cerca
        de 30 milhões de animais em situação de abandono, de acordo com a OMS.
        No entanto, a adoção é uma solução importante, oferecendo uma segunda
        chance aos animais e trazendo alegria para suas vidas e para as dos
        adotantes.
      </Text>

      <Text style={styles.title}>Fotos</Text>
      <Text style={styles.text}>
        Em breve...
      </Text>
      

      <Text style={styles.title}>Objetivo</Text>
      <Text style={styles.text}>
        Contribuir no engajamento de uma ONG protetora de animais. Facilitando o
        acesso a informações, como contato, adoção, voluntário e doações.
      </Text>

      <Text style={styles.title}>Alcance Esperado</Text>
      <Text style={styles.text}>
        Maior adesão de adoções por meio de um aplicativo interativo e agradável
        ao usuário. Buscar uma rede de voluntários para o apoio da ONG.
      </Text>
    </SafeAreaView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 12,
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

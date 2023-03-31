import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Vaga from './components/Vaga';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Vagas de Emprego de TI
      </Text>
      <ScrollView>
        <Vaga 
          titulo="Tech Lead Java" 
          salario="451260,63" 
          descricao="Liderar iniciativas para entrega de novos módulos e aplicações aos negócios/sistemas do grupo, definir padrões e jogar fut na praia." 
          contato="halftech@halftech.com"/>
        <Vaga 
          titulo="Desenvolver Sênios .NET" 
          salario="10520,20" 
          descricao="Traduzir storyboards e casos de uso em aplicativos funcionais, projetar, construir e manter códigos em C# eficientes e reutilizáveis, garantir o melhor desempenho, qualidade e capacidade de respostas dos aplicativos." 
          contato="dbcorpartion@db.com"/>

        <Vaga 
          titulo="Desenvolver Flutter" 
          salario="7412,00" 
          descricao="Conhecimentos sólidos em Flutter, padrões arquiteturais como MVVM. Necessário atuação anterior com Kotlin, Java, Engenharia de Software e Design Patterns. Experiência com XML e Custom Views." 
          contato="framework@framework.com"/>

        <Vaga 
          titulo="Consultor Sênior SAP CCS FICA" 
          salario="13450,30" 
          descricao="Necessário curso superior completo em TI, conhecimentos sólidos funcionais e técnicos em SAP CCS FICA e experiência em Utilities para empresas de Energia." 
          contato="dxctech@dxctech.com"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

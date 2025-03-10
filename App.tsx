import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [cep, setCep] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar" onPress={() => {}} />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  }
});

type Address = {
  logradouro: string; 
  bairro: string;
  localidade: string;
  uf: string;
}
const [address, setAddress] = useState<Address | null>(null);
const [error, setError] = useState('');

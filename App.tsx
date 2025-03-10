import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

//estrutura da interface

const App: React.FC = () => {
  const [cep, setCep] = useState('');
  

//função para buscar os dados do CEP
const fetchAddress = async () => {
  setError('');
  setAddress(null);

  if (cep.length !== 8) {
    setError('CEP inválido. Deve conter 8 dígitos.');
    return;
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      setError('CEP não encontrado.');
    } else {
      setAddress(response.data);
    }
  } catch (error) {
    setError('Erro ao buscar CEP. Verifique sua conexão.');
  }
};



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
      
  <Button title="Buscar" onPress={fetchAddress} />
    </View>
  );
  
};

//estilos da interface

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
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
});


//adicionando estados para armazenar o endereço e possíveis erros

type Address = {
  logradouro: string; 
  bairro: string;
  localidade: string;
  uf: string;
}
const [address, setAddress] = useState<Address | null>(null);
const [error, setError] = useState('');




//elementos para exibir os resultados

{error ? <Text style={styles.error}>{error}</Text> : null}
{address && (
  <View style={styles.result}>
    <Text>Logradouro: {address.logradouro}</Text>
    <Text>Bairro: {address.bairro}</Text>
    <Text>Cidade: {address.localidade} - {address.uf}</Text>
  </View>
)}

//estilo para exibir os resultados
//foi adicionado no objeto StyleSheet com o mesmo nome styles na linha 29

/*
const styles = StyleSheet.create({
  ...styles,
  error: {
    color: 'red',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
});*/


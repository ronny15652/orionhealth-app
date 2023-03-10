import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc/index.js';
import styles from './style.js'

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [menssageImc, setMenssageImc] = useState("preencha o peso e altura!")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("calcular")

function ImcCalculator(){
  return setImc((weight/(height*height)).toFixed(2))
}

function ValidationImc() {
  if(weight != null && height != null){
    ImcCalculator()
    setHeight(null)
    setWeight(null)
    setMenssageImc("Seu IMC é igual:")
    setTextButton("Calcular Novamente")
    return
  }
  setImc(null)
  setTextButton("Calcular")
  setMenssageImc("preencha o peso e altura!")
}

  return (
    <View style={styles.formContext}> 
      <View style={styles.form}>
        <Text
          style={styles.formLabel}
        >Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType='numeric'
        />
        <Text
          style={styles.formLabel}
        >Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 76.421"
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.ButtonCalculator}
          onPress={() => ValidationImc()}
        >
          <Text style={styles.textButtonCalculator} >
            {textButton}
          </Text>
        </TouchableOpacity>
      </View>
      <ResultImc 
        menssageResultImc={menssageImc}
        resultImc={imc}
      />
    </View>
  );
}
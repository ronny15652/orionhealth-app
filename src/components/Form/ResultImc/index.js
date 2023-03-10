import React from 'react';
import { View, Text } from 'react-native';
import styles from './style.js';

export default function ResultImc(props){
  return(
    <View style={styles.resulImc}>
      <Text style={styles.information}>{props.menssageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}
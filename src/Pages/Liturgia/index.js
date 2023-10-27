import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as styles from './styles'
import NavigationArrow from '../../Components/NavigationArrow'

export default function Liturgia() {
  const [mainText, setMainText] = useState('')
  const [mainTextRef, setMainTextRef] = useState('')
  const [fullText, setFullText] = useState({})
  const [pos, setPos] = useState(0)
  const [posLimit, setPosLimit] = useState(3)
  const [title, setTitle] = useState('')
  let sequencia = ['Primeira Leitura','Salmo','Segunda Leitura','Evangelho']
 
    useEffect(() => {
        fetch('https://liturgia.up.railway.app/')
        .then((response) => response.json())
        .then((data) => setFullText(data))
    },[])

    useEffect(() => {
      if(fullText?.[(sequencia[pos].charAt(0).toLowerCase() + sequencia[pos].slice(1)).replace(' ','')] === 'Não há segunda leitura hoje!') {
        sequencia = sequencia.filter((array) => array !== 'Segunda Leitura')
        setPosLimit(2)
      }
      const formatedText = fullText?.[(sequencia[pos].charAt(0).toLowerCase() + sequencia[pos].slice(1)).replace(' ','')]?.['texto'].toString().replace(/(\d+)/g, '\n$1 ')
      setMainText(formatedText ?? '')
      setMainTextRef(fullText?.[(sequencia[pos].charAt(0).toLowerCase() + sequencia[pos].slice(1)).replace(' ','')]?.['referencia'] ?? '')
      setTitle(sequencia[pos])
    },[pos,fullText])
  return (
    <View style={styles.background}>
      <View style={styles.menuRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.navigationArrows}>
            <TouchableOpacity onPress={() => setPos(pos => pos-1)} disabled={pos===0}>
              <NavigationArrow direction={'up'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPos(pos => pos+1)} disabled={pos===posLimit}>
              <NavigationArrow direction={'down'} />
            </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.title}>{mainTextRef}</Text>
          <ScrollView>
            <Text style={styles.mainText}>{mainText}</Text>
          </ScrollView>
        </View>
      </ScrollView>    
    </View>
  )
}
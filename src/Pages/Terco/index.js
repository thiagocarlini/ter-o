import { View, Text, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as styles from './styles'
import * as content from '../../Content/content'
import Count from '../../Components/Count'
import NavigationArrow from '../../Components/NavigationArrow'

export default function Terço({ route }) {
  const [misterio, setMisterio] = useState(0)
  const [position, setPosition] = useState(0)
  const [count, setCount] = useState(0)
  const [countLimit, setCountLimit] = useState(0)
  const [title, setTitle] = useState('Primeiro mistério')
  const [text, setText] = useState('')
  const [prevText, setPrevText] = useState('')
  const [nextText, setNextText] = useState('')

  const sequencia = {
    inicio: ['sinalDaCruz','credo','gloria','paiNosso','aveMaria'],
    misterios: ['paiNosso','aveMaria','gloria','oMeuJesus'],
    final: ['salveRainha']
  }



  const handleCount = (i) => {
    const actual = count
    if(i < actual) {
      setCount(actual-1)
    }
    else {
      setCount(actual+1)
    }
    
  }
  
  const handleNext  = () => {
    const actual = position
    setPosition(actual+1)
  }

  const handlePrev  = () => {
    const actual = position
    setPosition(actual-1)
  }

  useEffect(() => {
    if(misterio === 0) {
      setTitle('')
      setPrevText(content.oracoes[sequencia.inicio?.[position-1]] ?? '')
      setNextText(content.oracoes[sequencia.inicio?.[position+1]] ?? '')
      setText(content.oracoes[sequencia.inicio?.[position]] ?? '')
      if(sequencia.inicio[position] === 'aveMaria') {
        setCountLimit(3)
      }
      else {
        setCountLimit(0)
      }
    }
    if(misterio === 0 && position === 5) {
      const actualMisterio = misterio
      setMisterio(actualMisterio+1)
      setTitle(`${actualMisterio+1}º mistério:`)
      setPosition(0)
      setCount(0)
    }
    if(misterio > 0 && position === 5) {
      const actualMisterio = misterio
      setMisterio(actualMisterio+1)
      setTitle(`${actualMisterio+1}º mistério:`)
      setPosition(0)
      setCount(0)
    }

    if(misterio > 0 && position === -1) {
      const actualMisterio = misterio
      setMisterio(actualMisterio-1)
      setTitle(`${actualMisterio+1}º mistério:`)
      setPosition(0)
      setCount(0)
    }

    if(misterio > 0 && misterio < 6){
      setPrevText(content.oracoes[sequencia.misterios?.[position-1]] ?? '')
      setNextText(content.oracoes[sequencia.misterios?.[position+1]] ?? '')
      setText(content.oracoes[sequencia.misterios[position]])
      if(sequencia.misterios[position] === 'aveMaria') {
        setCountLimit(10)
      }
      else {
        setCountLimit(0)
      }
    }
    if(misterio === 6){
      if(position === 0) {
        setTitle('Salve Rainha')
        setText(content.oracoes[sequencia.final[0]])
      }
      else{
        setMisterio(0)
        setPosition(0)
      }
    }
    
  },[position])


  return (
    <View style={styles.background}>
      <Text style={styles.misteryTitle}>{`${title} ${content.misterios?.[route?.params?.misterio]?.[misterio] ?? ''}`}</Text>
      <View style={styles.previousView}>
        <Text style={styles.mainText}>{prevText}</Text>
      </View>
      <View style={styles.mainView}>
        <View>
          <View style={styles.counter}>
            {Array.from({ length: countLimit }, (_, i) =>
              <TouchableOpacity key={i} onPress={() => handleCount(i)}>
                <Count color={i+1<=count? 'green' : 'black'}/>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.mainText}>{text}</Text>
        </View>
        <View style={styles.navigationArrows}>
          <TouchableOpacity onPress={() => handlePrev()} disabled={misterio===0 && position===0}>
            <NavigationArrow direction={'up'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNext()}>
            <NavigationArrow direction={'down'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.nextView}>
        <Text style={styles.mainText}>{nextText}</Text>
      </View>

    </View>
  )
}
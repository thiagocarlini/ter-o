import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as styles from './styles'
import { Card } from 'react-native-paper'

export default function HomePage() {
    const navigation = useNavigation()
  return (
    <View style={styles.background}>
        <View style={styles.mainGroup}>
            <TouchableOpacity onPress={() => navigation.navigate('Terço',{misterio: 'Gozosos'})}>
                <Card style={styles.mainCard}>
                    <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/anunciacao-do-anjo-a-virgem-maria.jpg')}>
                        <View style={styles.cardLayer}>
                            <Text style={styles.cardText}>Gozosos</Text>
                        </View>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Terço',{misterio: 'Luminosos'})}>
                <Card style={styles.mainCard}>
                    <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/batismo-de-jesus.png')}>
                        <View style={styles.cardLayer}>
                            <Text style={styles.cardText}>Luminosos</Text>
                        </View>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Terço',{misterio: 'Dolorosos'})}>
                <Card style={styles.mainCard}>
                    <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/agonia-de-jesus.jpg')}>
                        <View style={styles.cardLayer}>
                            <Text style={styles.cardText}>Dolorosos</Text>
                        </View>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Terço',{misterio: 'Gloriosos'})}>
                <Card style={styles.mainCard}>
                    <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/ressureicao-de-jesus.jpeg')}>
                        <View style={styles.cardLayer}>
                            <Text style={styles.cardText}>Gloriosos</Text>
                        </View>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
        </View>
        <View style={styles.secondaryGroup}>
            <TouchableOpacity onPress={() => navigation.navigate('Liturgia')}>
                <Card style={styles.mainCard}>
                    <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/biblia.webp')}>
                        <View style={styles.cardLayer}>
                            <Text style={styles.cardText}>Liturgia Diária</Text>
                        </View>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
        </View>
    </View>
  )
}
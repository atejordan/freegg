import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getAllGames } from '../services/api/games/requests'
import { setGameId } from './Details'

declare const global: { platform: string }
global.platform = 'all'

export default function Home() {
  const [games, setGames] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    getAllGames().then((data) => {
      setGames(data)
    })
  }, [])

  const getRandomGames = () => {
    return games
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(1, 11)
  }

  const handleGamePress = (gameId) => {
    navigation.navigate('Details', { gameId })
    console.log(gameId)
  }

  return (
    <ScrollView style={styles.container}>
      {getRandomGames().map((game, index) => (
        <TouchableOpacity key={index} onPress={() => handleGamePress(game.id)}>
          <View style={styles.gameContainer}>
            <Text style={styles.title}>{game.title}</Text>
            <Image source={{ uri: game.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.description}>{game.short_description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 50,
    padding: 5,
    height: 500
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: 10
  },

  thumbnail: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    color: 'white'
  },

  gameContainer: {
    backgroundColor: '#3498db',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden'
  }
})

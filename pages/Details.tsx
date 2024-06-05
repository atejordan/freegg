import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { getGameById } from '../services/api/games/requests'

const Details = ({ route }) => {
  const { gameId } = route.params
  const [gameDetails, setGameDetails] = useState(null)

  useEffect(() => {
    getGameById(gameId).then((data) => setGameDetails(data))
  }, [gameId])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{gameDetails?.title}</Text>
      <Image source={{ uri: gameDetails?.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.description}>{gameDetails?.short_description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Genre:</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{gameDetails?.genre}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Platform:</Text>
        <Text style={styles.info}>{gameDetails?.platform}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Publisher:</Text>
        <Text style={styles.info}>{gameDetails?.publisher}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Developer:</Text>
        <Text style={styles.info}>{gameDetails?.developer}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Release Date:</Text>
        <Text style={styles.info}>{gameDetails?.release_date}</Text>
      </View>
      {gameDetails?.screenshots && (
        <View style={styles.screenshotsContainer}>
          <Text style={styles.label}>Screenshots:</Text>
          <ScrollView>
            {gameDetails.screenshots.map((screenshot, index) => (
              <Image key={index} source={{ uri: screenshot.image }} style={styles.screenshot} />
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#3498db'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white'
  },
  infoContainer: {
    marginBottom: 5
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center'
  },
  screenshotsContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  screenshot: {
    width: 384,
    height: 216,
    resizeMode: 'cover',
    marginBottom: 10
  }
})

export default Details

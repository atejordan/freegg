import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { getCategoryAndPlatform } from '../services/api/games/requests'
import { useNavigation } from '@react-navigation/native'

const CategoryDetails = ({ route }) => {
  const { categoryName } = route.params
  const [categoryAndPlatform, setCategoryAndPlatform] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    getCategoryAndPlatform(categoryName).then((data) => setCategoryAndPlatform(data))
  }, [])

  const handleGamePress = (gameId) => {
    navigation.navigate('Details', { gameId })
    console.log(gameId)
  }

  return (
    <ScrollView style={styles.container}>
      {categoryAndPlatform.map((game, index) => (
        <TouchableOpacity key={index} onPress={() => handleGamePress(game.id)}>
          <View style={styles.gameContainer}>
            <Image source={{ uri: game.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.short_description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  gameContainer: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    marginBottom: 20
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
  description: {
    color: 'white',
    padding: 10
  }
})

export default CategoryDetails

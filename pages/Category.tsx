import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getCategory } from '../services/api/games/requests'

const categories = [
  '2D',
  '3D',
  'Action',
  'Action-RPG',
  'Anime',
  'Battle-royale',
  'Card',
  'Fantasy',
  'Fighting',
  'First-person',
  'Flight',
  'Horror',
  'Low-spec',
  'MMO',
  'MMOFPS',
  'MMORTS',
  'MOBA',
  'Martial-arts',
  'Military',
  'Open-world',
  'Permadeath',
  'Pixel',
  'PvE',
  'PvP',
  'Racing',
  'Sandbox',
  'Sci-fi',
  'Sailing',
  'Shooter',
  'Side-scroller',
  'Social',
  'Space',
  'Sports',
  'Strategy',
  'Superhero',
  'Survival',
  'Tank',
  'Third-person',
  'Top-down',
  'Tower-defense',
  'Turn-based',
  'Voxel',
  'Zombie'
]

export default function CategoriesList() {
  const navigation = useNavigation()

  const handleCategoryPress = async (categoryName) => {
    navigation.navigate('CategoryDetails', { categoryName })
    console.log(categoryName)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} onPress={() => handleCategoryPress(category)}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff'
  },
  category: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#3498db',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

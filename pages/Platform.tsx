import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function PlatformSelection() {
  declare const global: { platform: string }
  const [platform, setPlatform] = useState('all')

  const handleMobileClick = () => {
    if (platform === 'browser') {
      setPlatform('all')
      global.platform = 'all'
    } else {
      setPlatform('browser')
      global.platform = 'browser'
    }
    console.log('global.platform:', global.platform)
  }

  const handlePcClick = () => {
    if (platform === 'pc') {
      setPlatform('all')
      global.platform = 'all'
    } else {
      setPlatform('pc')
      global.platform = 'pc'
    }
    console.log('global.platform:', global.platform)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleMobileClick}
        style={[styles.button, platform === 'browser' && styles.activeButton]}
      >
        <Text style={[styles.buttonText, platform === 'browser' && styles.activeButtonText]}>Browser</Text>
        {platform === 'browser' && <Text style={styles.activeText}>Browser est actif</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePcClick} style={[styles.button, platform === 'pc' && styles.activeButton]}>
        <Text style={[styles.buttonText, platform === 'pc' && styles.activeButtonText]}>PC</Text>
        {platform === 'pc' && <Text style={styles.activeText}>PC est actif</Text>}
      </TouchableOpacity>
      {platform === 'all' && <Text style={styles.activeText}>Tout est actif</Text>}
      {!global.platform && <Text style={styles.errorText}>Données non disponibles</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3498db',
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  activeButton: {
    backgroundColor: 'lightblue'
  },
  activeButtonText: {
    color: '#3498db'
  },
  activeText: {
    fontSize: 14,
    color: 'green'
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  }
})

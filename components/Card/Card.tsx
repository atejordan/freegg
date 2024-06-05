import { View, Text, Image, StyleSheet } from 'react-native'

type CardProps = {
  title: string
}

export default function Card({ title }: CardProps) {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.shutterstock.com/image-illustration/contemporary-art-design-composition-beautiful-260nw-2417772879.jpg'
        }}
        style={styles.image}
      />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})

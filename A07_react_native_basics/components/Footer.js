import{ Text, View} from 'react-native'
const year = new Date().getFullYear();

export default function Footer() {
  return(
    <View>
      <Text> Made with love in the kitchen.</Text>
      <Text> ©{year} My Recipe Book</Text>
    </View>
  )
}
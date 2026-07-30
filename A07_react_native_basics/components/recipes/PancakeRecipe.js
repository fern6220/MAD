import {Text, View} from 'react-native'
const minutes = 15;

export default function PancakeRecipe() {
  return(
    <View> 
      <Text> Pancakes</Text>
      <Text> Flour, egg, milk</Text>
      <Text>Time for 3 batches: {minutes * 3} minutes</Text>
    </View>
  )
}
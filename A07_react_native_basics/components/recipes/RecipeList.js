import {View, StyleSheet} from 'react-native'
import PancakeRecipe from '../recipes/PancakeRecipe'
import EggsRecipe from '../recipes/EggsRecipe'
import CakeRecipe from '../recipes/CakeRecipe'
import Divider from '../Divider'

export default function RecipeList() {
  return(
    <View style={styles.recipeCard}>
      <PancakeRecipe/>
      <Divider/>
      <EggsRecipe/>
      <Divider/>
      <CakeRecipe/>
    </View>
  )
}

const styles = StyleSheet.create({
  recipeCard: {
    borderWidth: 1,
    borderRadius: 8, 
    padding: 12,
    marginVertical: 8,
    borderColor: '#ddd'
  }
})
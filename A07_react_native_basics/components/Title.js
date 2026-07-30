import { Text, View, StyleSheet } from 'react-native'
import {BOOK_TITLE, AUTHOR} from '../constants'

function Shout(){
  return <Text>welcome to the kitchen!</Text>
}
export default function Title() {
  return( <View>
            <Text style={styles.heading}>{`${BOOK_TITLE} by ${AUTHOR}`}</Text>
            <Text>Simple recipes, cooked simply </Text>
            <Shout/>
          </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 28, color: '#b5651d', fontWeight: 'bold'
  }
})

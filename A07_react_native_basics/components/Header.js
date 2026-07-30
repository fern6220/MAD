import { View, Text } from 'react-native'
import Title from './Title'
const isWeekend = true;

export default function () {
  return (<View>
            <Title/>
            <Text>{isWeekend? 'Happy cooking this weekend!': 'Happy cooking today'}</Text>
          </View>
  );
}
import {Image, Text} from 'react-native';

export default function AboutMe() {

  return(
    <>
      <Image
          source={require('./assets/my-profile.jpg')}
          style={{width: 200, height: 200, borderRadius:100, alignSelf: 'center'}}
        />
      <Text style={{color: 'green', fontWeight: 'bold', textAlign: 'center'}}> Obet Fernando </Text>
      <Text style={{color: 'green', textAlign: 'center', fontWeight: 'bold'}}> ACT 2 </Text>
      <Text style={{color: 'green', textAlign: 'center', fontWeight: 'bold'}}> I love playing mobile games like Minecraft.</Text>
      <Text>              </Text>
      <Text style={{color: 'green', fontWeight: 'bold'}}>Reflection: </Text>
      <Text style={{color: 'brown'}}> So far I have learned so many things while studying MAD. I can now do simple commands on git bash. I have learned now how to use command prompt, git bash and how to use the "code ." command to switch from the command prompt to visual code studio. I have learned that following structures was the top priority that I must do when doing my assignments and activities. MAD is one of the reasons on why I temporarily stop playing online games because it requires time to complete an activity for us as a begginer and the teaching style makes us more dicipline on making our pendings and our time managements.</Text>
    </>
  );
}
import React from 'react'
import Header from '../components/loginHeader'
import Button from '../components/loginButton'
import Paragraph from '../components/loginParagraph'
import { Image, View } from 'react-native'
import { styles } from '../styles/styles'

export default function Onboarding3({ navigation }) {
  return (
    <View style={styles.onboardcontainer}>
      <Image source={require('../assets/onboarding3.png')} style={styles.onboard3} resizeMode='contain'/>
      <Header>Track Progress</Header>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <View style={styles.roundcontainer}>
        <View style={styles.lightround} /><View style={styles.lightround} /><View style={styles.darkround} />
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Register')}
      >
        Get Started!
      </Button>
    </View>
  )
}

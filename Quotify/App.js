import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView, Image } from 'react-native';
import { Share } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Speech from 'expo-speech';
import * as Clipboard from 'expo-clipboard';

export default function App() {

  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/quotes/random").then(res => res.json()).then(result => {
      setQuote(result[0].content);
      setAuthor(result[0].author);
      setIsLoading(false);
    });
  }

  // New Quote Function
  useEffect(() => {
    randomQuote();
  }, []);

  // Read Quote Function
  const readQuote = () => {
    const text = `${Quote} by ${Author}`;
    Speech.speak(text);
  }

  // Copy Function
  const copyToClipboard = () => {
    const text = `${Quote} — ${Author}`;
    Clipboard.setStringAsync(text);
  }

  // Share Function
  const shareQuote = async () => {
    try {
      const text = `${Quote} — ${Author}`;
      await Share.share({
        message: text,
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ImageBackground source={require('./assets/bg.jpg')} style={styles.background}>

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('./assets/head.png')} style={styles.icon} />
          <Text style={styles.title}>QUOTIFY</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            <View style={styles.featureBox}>
              {/* Quote Section */}
              <FontAwesome5 name="quote-left" style={{ fontSize: 20, marginBottom: -12, marginTop: 10 }} color="#C0C0C0" />
              <Text style={styles.quote}>{Quote}</Text>
              <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right', marginTop: -20, marginBottom: 20 }} color="#C0C0C0" />
              {/* Author Section */}
              <Text style={styles.author}>— {Author}</Text>
              {/* Feature Section */}
              <View style={styles.featureContainer}>
                {/* Volume Button */}
                <TouchableOpacity onPress={readQuote} style={styles.featureIcon}>
                  <FontAwesome5 name="volume-up" size={22} color="#FFFFFF" />
                </TouchableOpacity>
                {/* Copy Button */}
                <TouchableOpacity onPress={copyToClipboard} style={styles.featureIcon}>
                  <FontAwesome5 name="copy" size={22} color="#FFFFFF" />
                </TouchableOpacity>
                {/* Share Button */}
                <TouchableOpacity onPress={shareQuote} style={styles.featureIcon}>
                  <FontAwesome5 name="share" size={22} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          }
        </ScrollView>
        {/* New Quote Button Section */}
        <TouchableOpacity onPress={randomQuote} style={styles.btn}>
          <Text style={styles.buttonText}>{isLoading ? "Loading..." : "New Quote"}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  quote: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  btn: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 15,
    borderRadius: 30,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#C0C0C0',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  author: {
    textAlign: 'right',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#C0C0C0',
    marginBottom: 30
  },
  featureIcon: {
    borderWidth: 2,
    borderColor: '#C0C0C0',
    borderRadius: 50,
    padding: 10,
  },
  featureBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#0000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '95%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginLeft: -200,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
});
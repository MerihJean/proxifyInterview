import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';
import  Constants  from 'expo-constants'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Divider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// calculating the width and height of the screen for responsiveness purposes
const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

export default function App() {

  // declaration of the view's reference to be used for rotating the screen on click
  const AnimationRef = useRef<any>();

  // Font loading
  let [fontsLoaded] = useFonts({
    'AvenirRegular': require('./assets/fonts/AvenirRegular.ttf'),
    'AvenirBold': require('./assets/fonts/AvenirBold.ttf'),
  });

  // if fonts are not loaded, do not return the main screen
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  // otherwise, return the main screen
  return (
    /* Page including the start page and the menu. All heights and widths are calculated according to the screen width and height of the screen, for responsiveness purposes */
    <View style={{flex:1, flexDirection: 'column', width: screenWidth*1.5, height: screenHeight*1.5}}>
      {/*Status Bar configuration*/}
      <StatusBar style="light" />
      {/* Leaving the space occupied by the status bar, empty, in order to match the design */}
      <View style={{width: screenWidth, height: Constants.statusBarHeight, backgroundColor:'#ffffff'}}/>
      {/* Menu Page*/}
      <View style={{flex:1, flexDirection: 'column', width: screenWidth, height: screenHeight,  backgroundColor:'#ffffff'}}>
        <View style={{flex:1, flexDirection: 'row', width: screenWidth, height: screenHeight-Constants.statusBarHeight, backgroundColor:'#1F1B33', borderTopLeftRadius:48}}>
          <View style={{width: screenWidth*0.072, height: '100%'}}/>
          {/* Content of the menu */}
          <View style={{flex:1, flexDirection: 'column', width: screenWidth*0.468, height: '100%', justifyContent:'flex-start'}}>
            <View style={{width: '100%', borderTopLeftRadius:48, borderTopRightRadius:48, height: screenHeight*(122/773)}}/>
            <View style={{flexDirection: 'row', width: '100%', height: screenHeight*(38/773)}}>
              <View style={{width: '17.6%', height: '100%'}}/>
              <View style={{width: '82.4%', height: '100%'}}>
                <Text style={{color:'#ffffff', height:screenHeight*0.057, width:screenWidth*0.221, fontFamily:'AvenirBold', fontSize:screenWidth*0.075, lineHeight:38}}>Viktor</Text>
              </View>
            </View>
            <View style={{width: '100%', height: screenHeight*(57/773)}}/>
            <View style={{flexDirection: 'row', width: '100%', height: screenHeight*51/773, backgroundColor:'rgba(252, 128, 116, 0.2)', borderRadius:15.5,}}>
              <View style={{width: '17.14%', height: '100%'}}/>
              <View style={{width: '82.86%', height: '100%'}}>
                {/* Start button to click on and that is located in the menu */}
                <TouchableOpacity
                activeOpacity={1}
                style={{flex:1, justifyContent:'center'}}
                onPress={() => {
                  AnimationRef.current.transitionTo({translateX: 0, rotate: '0deg', translateY: 0}, 1)
                }}
                >
                <Text style={{color:'#FC8074', opacity:1, fontFamily:'AvenirRegular', fontSize:20, letterSpacing:-0.5}}>Start</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width: '100%', height: screenHeight*(31/773)}}/>
            <View style={{flexDirection: 'row', width: '100%', height: screenHeight*27/773}}>
              <View style={{width: '17.14%', height: '100%'}}/>
              <View style={{width: '82.86%', height: '100%'}}>
                <Text style={{color:'#ffffff', opacity:1, fontFamily:'AvenirRegular', fontSize:20, lineHeight:27}}>Your Cart</Text>
              </View>
            </View>
            <View style={{width: '100%', height: screenHeight*42/773}}/>
            <View style={{ flexDirection: 'row',width: '100%', height: screenHeight*27/773}}>
              <View style={{width: '17.14%', height: '100%'}}/>
              <View style={{width: '82.86%', height: '100%'}}>
                <Text style={{color:'#ffffff', opacity:1, fontFamily:'AvenirRegular', fontSize:20, lineHeight:27}}>Favorites</Text>
              </View>
            </View>
            <View style={{width: '100%', height: screenHeight*43/773}}/>
            <View style={{flexDirection: 'row',width: '100%', height: screenHeight*27/773}}>
              <View style={{width: '17.14%', height: '100%'}}/>
              <View style={{width: '82.86%', height: '100%'}}>
                <Text style={{color:'#ffffff', opacity:1, fontFamily:'AvenirRegular', fontSize:20, lineHeight:27}}>Your Orders</Text>
              </View>
            </View>
            <View style={{width: '100%', height: screenHeight*61.5/773}}/>
            <Divider style={{ backgroundColor: '#84818E', height:1 }} /> 
            <View style={{width: '100%', height: screenHeight*59.5/773}}/>
            <View style={{flexDirection: 'row', width: '100%', height: screenHeight*30/773}}>
              <View style={{width: '17.14%', height: '100%'}}/>
              <View style={{width: '82.86%', height: '100%'}}>
                <Text style={{color:'#ffffff', opacity:1, fontFamily:'AvenirRegular', fontSize:20, lineHeight:27}}>Sign Out</Text>
              </View>
            </View>
          </View>
          <View style={{width: screenWidth*0.46, height: '100%'}}/>
        </View>
      </View>
      {/* Start Page*/}
      <Animatable.View style={{flex:1, flexDirection: 'column', width: screenWidth, height: screenHeight, borderRadius:48, position:'absolute', backgroundColor:'#ffffff'}}
      ref={AnimationRef}
      >
        <View style={{width: screenWidth, height: screenHeight*0.065}}/>
        <View style={{width: screenWidth, height: screenHeight*0.05, backgroundColor:'#ffffff', flexDirection: 'row', borderRadius:48}}>
          <View style={{width: screenWidth*0.096, height: '100%', backgroundColor:'#ffffff'}}/>
          <View style={{width: screenWidth*0.43, height: '100%', backgroundColor:'#ffffff', flexDirection: 'row'}}>
            <View style={{width: '18.75%', height: '100%', flexDirection: 'column'}}>
              {/*Menu symbol to click on*/}
              <TouchableOpacity style={{flex:1}}
              activeOpacity={1}
              onPress={() => {
                  AnimationRef.current.transitionTo({translateX: screenWidth/1.55, rotate: '-8deg', translateY: screenHeight*0.07}, 1)
              }}
              >
              <View style={{width: screenWidth, height: '33%'}}>
                <View style={{  height: 4,width: screenWidth*0.08, borderRadius:3.5, backgroundColor:'#E8E5E5'}}/>
              </View>
              <View style={{width: screenWidth, height: '33%', backgroundColor:'#ffffff'}}>
                <View style={{  height: 4,width: screenWidth*0.08, borderRadius:3.5, backgroundColor:'#E8E5E5'}}/>
              </View>
              <View style={{width: screenWidth, height: '33%', backgroundColor:'#ffffff'}}>
                <View style={{  height: 4,width: screenWidth*0.08, borderRadius:3.5, backgroundColor:'#E8E5E5'}}/>
              </View>
              </TouchableOpacity>
            </View>
            <View style={{width: '21.875%', height: '100%', backgroundColor:'#ffffff'}}/>
            <View style={{width: '59.375%', height: '100%'}}>
            <Text style={{color:'#9F9FA0', fontSize:screenWidth*0.064, fontWeight: '500', lineHeight:screenHeight*0.05, letterSpacing: screenWidth*0.013, fontFamily:'AvenirRegular'}}>START</Text>
            </View>
          </View>
          <View style={{width: screenWidth*0.474, height: '100%', backgroundColor:'#ffffff'}}/>
        </View>
        <View style={{width: screenWidth, height: screenHeight*0.885, backgroundColor:'#ffffff'}}/>
      </Animatable.View>
    </View>
  );
  }
}


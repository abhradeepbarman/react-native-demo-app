// import {
//   Alert,
//   Button,
//   Image,
//   Pressable,
//   Text,
//   TouchableOpacity,
//   View,
//   SafeAreaView,
//   StyleSheet,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.textStyle}>Hello</Text>

//       <Image
//         source={{
//           uri: 'https://images.pexels.com/photos/29893439/pexels-photo-29893439/free-photo-of-delicious-breakfast-with-bread-and-eggs-dish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//           width: 200,
//           height: 200,
//         }}
//       />

//       {/* <Button title="Click me"></Button> */}

//       {/* <TouchableOpacity
//         style={{backgroundColor: 'red', marginTop: 20, padding: 10}} onPress={() => Alert.alert('Button clicked')}>
//         <Text>Button</Text>
//       </TouchableOpacity> */}

//       <Pressable
//         style={{backgroundColor: 'red', marginTop: 20, padding: 10}}
//         onPress={() => Alert.alert('Button clicked')}>
//         <Text>Button</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'black',
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// });

// export default App;








// import {StyleSheet, Text, useColorScheme, View, ScrollView} from 'react-native';
// import React from 'react';

// const App = () => {
//   const theme = useColorScheme();
//   const isDarkMode = theme === 'dark';

//   return (
//     <ScrollView
//     horizontal
//       contentContainerStyle={{
//         gap: 10,
//       }}
//       style={[{backgroundColor: isDarkMode ? 'black' : 'white'}]}>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//       <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//         App
//       </Text>
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

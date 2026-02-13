import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CustomTabBar = ({ state, navigation }) => {
  return (
    <View style={{
      flexDirection: 'row',
      height: 70,
      backgroundColor: '#111',
      alignItems: 'center'
    }}>

      {/* HOME */}
      <TouchableOpacity
        style={{ flex:1, alignItems:'center' }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: state.index === 0 ? 'yellow' : 'white' }}>
          Home
        </Text>
      </TouchableOpacity>

      {/* PROFILE */}
      <TouchableOpacity
        style={{ flex:1, alignItems:'center' }}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={{ color: state.index === 1 ? 'yellow' : 'white' }}>
          Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default CustomTabBar;

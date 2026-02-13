import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ marginTop: 100 }}>
      <Text>LoginScreen</Text>
      <Button
        title="login"
        onPress={() => dispatch(login({ name: 'pavitra' }))}
      />
    </View>
  );
};

export default LoginScreen;

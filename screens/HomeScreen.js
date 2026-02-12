import { View, Text,Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { increment ,decrement} from "../redux/counterSlice";

import { logout } from "../redux/authSlice";


const HomeScreen = () => {
    const user = useSelector((state) => state.auth.user);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
   <View style={{ marginTop: 100, alignItems: "center" }}>
     <Text>Welcome {user.name}</Text>
     <Text>Count: {count}</Text>
         <Button
        title="Increase"
        onPress={() => dispatch(increment())}
      />      <Button
        title="Decrease"
        onPress={() => dispatch(decrement())}
      />

      <Button
        title="Logout"
        onPress={() => dispatch(logout())}
      />
    </View>
  )
}

export default HomeScreen
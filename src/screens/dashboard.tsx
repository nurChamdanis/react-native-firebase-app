import React from 'react';
import { View, Text } from 'react-native';
import { logout, useAuth } from '@auth';
import { ScreenWrapper, Spacer } from '@components';  
import env from 'react-native-config'; 

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <ScreenWrapper>
      <View>
        <Text>{"Test"}</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Dashboard;



{/* <Text>Current user ID: {currentUser?.uid}</Text>
<Spacer height={s(5)} />
<Spacer height={s(5)} />
<Pressable onPress={() => logout()}>
  <Text>Logout</Text>
</Pressable>
<Spacer height={s(5)} />
<Text>Built for {env.APP_ENV}</Text> */}

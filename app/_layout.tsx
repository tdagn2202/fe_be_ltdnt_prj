import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { View, Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { UserProvider } from '@/components/context';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack initialRouteName ="index">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name = "register" options={{headerShown:false}}/>
          <Stack.Screen name = "index" options={{headerShown:false}}/>
          <Stack.Screen name = "changePass" options={{headerShown:false}}/>
          <Stack.Screen name = "userSetting" options={{headerShown:false}}/>
          <Stack.Screen name = "homeShow" options={{headerShown:false}}/>
          
          <Stack.Screen name="+not-found" />
        </Stack>
      </UserProvider>
    </ThemeProvider>
  );
}

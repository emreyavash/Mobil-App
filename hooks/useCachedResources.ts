import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Poppins':require('../assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Medium-Italic':require('../assets/fonts/Poppins-MediumItalic.ttf'),
          'Poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
          'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
          'Poppins-SemiBoldItalic':require('../assets/fonts/Poppins-SemiBoldItalic.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

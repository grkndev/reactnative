import { AsyncStorage } from 'react-native';

const THEME_KEY = 'theme';

export const setTheme = async (theme) => {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.log('Error setting theme:', error);
  }
};

export const getTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem(THEME_KEY);
    if (theme !== null) {
      return theme;
    }
  } catch (error) {
    console.log('Error getting theme:', error);
  }
  return 'light'; // Varsayılan tema
};

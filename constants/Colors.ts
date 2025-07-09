/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { StyleSheet } from 'react-native';


const theme = 'light'; // or 'dark', you can change this based on your app's theme

const getBaseColor = (theme: string) => {
  if (theme === 'light') {
    return '26, 26, 26'; // sin el #
  }
  return '236, 236, 236'; // sin el #
};

const baseColor = getBaseColor(theme); // sin el #

export const Colors = {
  level0: `rgba(${baseColor}, 1)`,    // fuerte
  level1: `rgba(${baseColor}, 0.7)`,  // medio
  level2: `rgba(${baseColor}, 0.4)`,  // tenue
  level3: `rgba(${baseColor}, 0.3)`,  // muy tenue
};

export const ButtonStyle = StyleSheet.create(
  {
      Button: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 20,
  },

  ButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  }
)

// const tintColorLight = '#0a7ea4';
// const tintColorDark = '#fff';

// export const Colors = {
//   light: {
//     text: '#11181C',
//     background: '#fff',
//     tint: tintColorLight,
//     icon: '#687076',
//     tabIconDefault: '#687076',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#ECEDEE',
//     background: '#151718',
//     tint: tintColorDark,
//     icon: '#9BA1A6',
//     tabIconDefault: '#9BA1A6',
//     tabIconSelected: tintColorDark,
//   },
// };

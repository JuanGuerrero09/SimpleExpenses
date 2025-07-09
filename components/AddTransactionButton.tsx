import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ButtonStyle, Colors } from '@/constants/Colors';

interface AddTransactionButtonProps {
  onPress: () => void;
}

export default function AddTransactionButton({ onPress }: AddTransactionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.96, { stiffness: 150 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { stiffness: 150 });
  };

  return (
    <Animated.View style={[styles.fabContainer, animatedStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={ButtonStyle.Button}
      >
        <Text style={ButtonStyle.ButtonText}>Add Transaction</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 32,
    right: 32, 
    alignSelf: 'flex-end',
    zIndex: 100, // aparece sobre todo
  },
});

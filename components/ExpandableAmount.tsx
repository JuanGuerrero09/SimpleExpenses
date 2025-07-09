import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  LinearTransition,
  withTiming,
  withDelay,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import TransactionList from './TransactionList';
import { Transaction } from '@/types/types';
import { useEffect } from 'react';
import getAmountStyle from '@/utils/getStyles';

const { width } = Dimensions.get('window');

const transactions: Transaction[] = [
  {
    id: '1',
    amount: 149.69,
    title: 'UNIQLO',
    category: 'Clothing',
    date: new Date('2025-07-08'),
  },
  {
    id: '2',
    amount: 12.99,
    title: 'Starbucks',
    category: 'Food & Drink',
    date: new Date('2025-07-07'),
  },
  {
    id: '3',
    amount: 85.0,
    title: 'Spotify Annual',
    category: 'Entertainment',
    date: new Date('2025-07-05'),
  },
  {
    id: '4',
    amount: 24.5,
    title: 'Taxi - Madrid',
    category: 'Transport',
    date: new Date('2025-07-04'),
  },
  {
    id: '5',
    amount: 310.0,
    title: 'Grocery Store',
    category: 'Groceries',
    date: new Date('2025-07-03'),
  },
  {
    id: '6',
    amount: 59.99,
    title: 'H&M',
    category: 'Clothing',
    date: new Date('2025-07-02'),
  },
  {
    id: '7',
    amount: 22.5,
    title: 'Burger King',
    category: 'Food & Drink',
    date: new Date('2025-07-01'),
  },
  {
    id: '8',
    amount: 10.99,
    title: 'App Store',
    category: 'Apps',
    date: new Date('2025-06-30'),
  },
];



interface ExpandableAmountProps {
  label: string;
  amount: string;
  expanded: boolean;
  onPress: () => void;
  textStyle?: any;
}

export default function ExpandableAmount ({
  label,
  amount,
  expanded,
  onPress,
  textStyle,
}: ExpandableAmountProps) {

  const offset = useSharedValue(0);
  const baseStyle = textStyle;
  const expandedStyle = getAmountStyle(4);

  const textWidth = useSharedValue(0);
  const containerWidth = width; // ya lo tienes arriba


  useEffect(() => {
    if (expanded) {
      const centerOffset = containerWidth / 2 - textWidth.value / 2;
      console.log(centerOffset, containerWidth, textWidth.value)
      offset.value = withSpring(centerOffset + 50, {
        damping: 15, // resistencia del rebote (menor → más bouncy)
        stiffness: 120, // velocidad (mayor → más rápido)
        mass: 1, // masa del objeto animado
        overshootClamping: false, // si true, evita el rebote (directo al punto)
        restDisplacementThreshold: 0.01, // precisión de parada
      }) // Mueve a la derecha
    } else {
      offset.value = withSpring(0, {
        damping: 15, // resistencia del rebote (menor → más bouncy)
        stiffness: 120, // velocidad (mayor → más rápido)
        mass: 1, // masa del objeto animado
        overshootClamping: false, // si true, evita el rebote (directo al punto)
        restDisplacementThreshold: 0.01, // precisión de parada
      }) // Vuelve al inicio
    }
  }, [expanded]);

  const animatedStyle = useAnimatedStyle(() => ({
    // transform: [{ translateX: offset.value }],
    fontSize: withTiming(expanded ? expandedStyle.fontSize : baseStyle.fontSize, { duration: 300 }),
    color: withTiming(expanded ? expandedStyle.color : baseStyle.color, { duration: 100 }),
    fontWeight: expanded ? expandedStyle.fontWeight : baseStyle.fontWeight, // no se puede animar
  }));

const containerAnimatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateX: offset.value }],
}));



  return (
    <Animated.View layout={LinearTransition.springify().damping(25)}
    // entering={entering}
    >
      <Animated.View style={containerAnimatedStyle}>
  <Pressable onPress={onPress}>
    <Animated.Text
      onLayout={(event) => {
        const layoutWidth = event.nativeEvent.layout.width;
        textWidth.value = layoutWidth;
      }}
      style={animatedStyle}
    >
      {`${amount}${label}`}
    </Animated.Text>
  </Pressable>
</Animated.View>

      {expanded && (
        <View style={styles.expanded}>
          <Text style={styles.details}>+ Breakdown info here</Text>
          <View style={styles.transactionListContainer}>
            <TransactionList transactions={transactions} />
          </View>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  expanded: {
    marginTop: 12,
  },
  details: {
    fontSize: 14,
    color: '#6A6A6A',
  },
  transactionListContainer: {
    height: 260, // Ajusta según prefieras
    overflow: 'hidden',
  },
});

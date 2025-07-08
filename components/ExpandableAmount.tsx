import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  LinearTransition,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import TransactionList, { Transaction } from './TransactionList';

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

export default function ExpandableAmount({
  label,
  amount,
  expanded,
  onPress,
  textStyle,
}: ExpandableAmountProps) {
  // const entering = (targetValues: any) => {
  //   'worklet';
  //   const animations = {
  //     originX: withTiming(targetValues.originX, { duration: 300 }),
  //     opacity: withTiming(1, { duration: 300 }),
  //     borderRadius: withDelay(100, withTiming(30, { duration: 300 })),
  //     transform: [
  //       { rotate: withTiming('0deg', { duration: 300 }) },
  //       { scale: withTiming(1, { duration: 300 }) },
  //     ] as any,
  //   };

  //   const initialValues = {
  //     originX: -width,
  //     opacity: 0,
  //     borderRadius: 10,
  //     transform: [{ rotate: '90deg' }, { scale: 0.5 }] as any,
  //   };

  //   const callback = (finished: boolean) => {
  //     if (finished) {
  //       console.log(`ExpandableAmount for ${label} entered`);
  //     }
  //   };

  //   return {
  //     initialValues,
  //     animations,
  //     callback,
  //   };
  // };

  return (
    <Animated.View layout={LinearTransition.springify()} 
    // entering={entering}
    >
      <Pressable onPress={onPress}>
        <Text style={textStyle}>{`${amount}${label}`}</Text>
      </Pressable>
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

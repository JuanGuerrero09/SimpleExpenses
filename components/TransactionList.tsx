import { Colors } from '@/constants/Colors';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import type { FC } from 'react';
import { Transaction } from '@/types/types';



const TransactionItem: FC<Transaction> = ({ amount, title, category }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemCategory}>{category}</Text>
      </View>
      <Text style={styles.itemAmount}>-${amount.toFixed(2)}</Text>
    </View>
  );
};

interface TransactionListProps {
  transactions: Transaction[]
}

export default function TransactionList({transactions}: TransactionListProps) {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionItem {...item} />}
    />
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.level0,
  },
  itemCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.level1, // más fuerte que subAmountFaded (level2)
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.level0,
  },
});

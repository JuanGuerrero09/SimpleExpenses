import { StyleSheet, View, Text } from 'react-native';
9
export default function TransactionList () {
  return (
    <View style={styles.card}>
      <Text style={styles.amountCard}>$612.90m</Text>
      <View style={styles.tabs}>
        {['All', 'By Category', 'Top Spends'].map((t, i) => (
          <Text key={i} style={styles.tabText}>{t}</Text>
        ))}
      </View>
      <View style={styles.transactionItem}>
        <Text style={styles.title}>From Ale Gonzales</Text>
        <Text style={styles.amountText}>$1,000</Text>
      </View>
      {/* ...más items */}
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 4,
  },
  amountCard: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9E9E9E',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});

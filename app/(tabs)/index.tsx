// import { Image } from 'expo-image';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import TransactionList from '@/components/TransactionList';



export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.calendarIcon}>
          <Text style={styles.calendarMonth}>APR</Text>
          <Text style={styles.calendarDay}>11</Text>
        </View>

        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Time Frame</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.amount}>€612.90m</Text>
        <TransactionList />
        <Text style={styles.subAmount}>€143.20w</Text>
        <Text style={styles.subAmountFaded}>€18.75d</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    marginTop: 20,
  },
  amount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  subAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#9E9E9E',
  },
  subAmountFaded: {
    fontSize: 24,
    fontWeight: '600',
    color: '#D3D3D3',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    // marginBottom: 16,
  },

  calendarIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },

  calendarMonth: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FF3B30',
  },

  calendarDay: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },

  addButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 20,
  },

  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },

});

import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ExpandableAmountList from '@/components/ExpandableAmountList';
import TimeFramerSelecterModal from '@/components/TimeFramerSelecterModal';
import TopBar from '@/components/TopBar';
import AddTransactionButton from '@/components/AddTransactionButton';




export default function HomeScreen () {

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onOpenTimeSelecter = () => {
    setModalVisible(true);
  };

  const onCloseTimeSelecter = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TopBar onPress={onOpenTimeSelecter} />
      <View style={styles.header}>
        <ExpandableAmountList />
      </View>
      <AddTransactionButton onPress={() => alert('Hola mundo')} />
      <View>
        <TimeFramerSelecterModal visible={modalVisible} onClose={onCloseTimeSelecter} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginTop: 20,
    paddingLeft: 12,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 28,

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

});

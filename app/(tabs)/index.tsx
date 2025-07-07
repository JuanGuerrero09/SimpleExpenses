import { StyleSheet, View, Text, Pressable, Modal, Switch } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import ExpandableAmountList from '@/components/ExpandableAmountList';
import getCurrentMonthAndDay from '@/utils/getDate'; // Asegúrate de que esta función esté definida correctamente

function TimeFramerSelecterModal ({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [showModal, setShowModal] = useState(false);
  const translateY = useSharedValue(400); // empieza fuera de pantalla

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: translateY.value < 100 ? 1 : 0, // cuando esté visible, opacity = 1
  }));

  useEffect(() => {
    if (visible) {
      setShowModal(true); // muestra el modal antes de animar entrada
      translateY.value = withTiming(0, { duration: 300 });
    } else {
      translateY.value = withTiming(400, { duration: 300 }, (finished) => {
        if (finished) {
          runOnJS(setShowModal)(false); // oculta el modal cuando termine la salida
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!showModal) return null;

  return (
    <Modal transparent animationType="none" visible={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <BlurView intensity={50} tint="light" style={StyleSheet.absoluteFill} />
        <Pressable style={StyleSheet.absoluteFill} onPress={() => onClose()} />

        <Animated.View style={[styles.panel, animatedStyle]}>
          <Text style={styles.title}>Time Frames</Text>

          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Year Spending</Text>
            <Switch />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Monthly Spending</Text>
            <Switch />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Weekly Spending</Text>
            <Switch />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Daily Spending</Text>
            <Switch />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}



export default function HomeScreen () {

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { month, day } = getCurrentMonthAndDay();

  const onOpenTimeSelecter = () => {
    setModalVisible(true);
  };

  const onCloseTimeSelecter = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.calendarIcon}>
          <Text style={styles.calendarMonth}>{month}</Text>
          <Text style={styles.calendarDay}>{day}</Text>
        </View>
        <Pressable style={styles.addButton} onPress={onOpenTimeSelecter}>
          <Text style={styles.addButtonText}>+ Add Time Frame</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <ExpandableAmountList />
      </View>
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
    padding: 24,
  },
  header: {
    marginTop: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,

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

  modalOverlay: {
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.1)', // glass-like background
    justifyContent: 'flex-end', // para que el modal aparezca abajo
    // backdropFilter: 'blur(10px)', // solo en web, para móvil usamos otra técnica
  },
  modalContent: {
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparente para efecto glass
    overflow: 'hidden',
    backdropFilter: 'blur(10px)', // solo web, usa BlurView en móvil
  },

  panel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    padding: 24,
    backgroundColor: '#FFFFFF', // fondo blanco sólido
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10, // para Android
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
  },

});

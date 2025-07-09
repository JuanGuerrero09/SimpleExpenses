import {getCurrentMonthAndDay} from '@/utils/getDate';
import { usePathname } from 'expo-router';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { ButtonStyle } from '@/constants/Colors';

interface TopBarProps {
  onPress: () => void
}

export default function TopBar ({ onPress }: TopBarProps) {

  const { month, day } = getCurrentMonthAndDay();

  const pathname = usePathname();
  console.log(pathname); // → "/(tabs)/calendar"

  return (
    <View style={styles.topBar}>
      <View style={styles.calendarIcon}>
        <Text style={styles.calendarMonth}>{month}</Text>
        <Text style={styles.calendarDay}>{day}</Text>
      </View>
      <Pressable style={ButtonStyle.Button} onPress={onPress}>
        <Text style={ButtonStyle.ButtonText}>+ Add Time Frame</Text>
      </Pressable>
      {/* Icono del calendario, etc... */}
      {/* {pathname !== '/' && onPress && (
        <Pressable onPress={onPress} style={styles.button}>
          <Text>+ Add Time Frame</Text>
        </Pressable>
      )} */}
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
    transform: [{rotate: '-8deg'}],
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

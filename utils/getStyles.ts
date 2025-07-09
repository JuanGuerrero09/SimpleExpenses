import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const getAmountStyle = (index: number) => {
  switch (index) {
    case 0:
      return styles.amount;
    case 1:
      return styles.subAmount;
    case 2:
      return styles.subAmountFaded;
    case 3:
      return styles.subAmountFadedFaded;
    case 4:
      return styles.titleStyle;
    default:
      return styles.titleStyle;
  }
};

export default getAmountStyle;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.level0,
  },
  amount: {
    fontSize: 36,
    fontWeight: '700',
    color: Colors.level0,
  },
  subAmount: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.level1,
  },
  subAmountFaded: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.level2,
  },
  subAmountFadedFaded: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.level3,
  },
});
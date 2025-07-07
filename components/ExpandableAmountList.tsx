import ExpandableAmount from './ExpandableAmount';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { useState } from 'react';
import getAmountStyle from '@/utils/getStyles';
import { StyleSheet } from 'react-native';

const amounts = [
  { value: '€2612.90', label: 'y' },
  { value: '€612.90', label: 'm' },
  { value: '€143.20', label: 'w' },
  { value: '€18.75', label: 'd' },
];



export default function ExpandableAmountList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };


  return (
    <Animated.View layout={LinearTransition.duration(100).springify()}>
      {amounts.map((item, index) => 
        (
        <ExpandableAmount
          key={index}
          label={item.label}
          amount={item.value}
          expanded={expandedIndex === index}
          onPress={() => handlePress(index)}
          textStyle={getAmountStyle(index)}>
          </ExpandableAmount>)
      )}
    </Animated.View>
  );
}



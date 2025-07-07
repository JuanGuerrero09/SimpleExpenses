import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  LinearTransition,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface Props {
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
}: Props) {
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
});

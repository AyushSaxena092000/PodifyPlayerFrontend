import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import colors from '../utils/colors';

interface Props {
    progress: number;
}

const Progress: FC<Props> = ({progress}) => {
  return (
    <>
      <Text style={styles.text}>{`${progress}%`}</Text>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </>
  );
};

export default Progress;

const styles = StyleSheet.create({
  text: {
    color: colors.CONTRAST,
    paddingVertical: 2,
    alignSelf: 'flex-end',
  },
  progressBar: {
    height: 10,
    backgroundColor: colors.CONTRAST,
    borderRadius: 5,
  }
});

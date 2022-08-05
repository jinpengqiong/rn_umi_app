import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AnimatedFAB } from 'react-native-paper';

export default () => {
    const [isExtended, setIsExtended] = useState(true);

  return (
    <>
      <AnimatedFAB
        icon={'plus'}
        label={'Label'}
        extended={isExtended}
        onPress={() => console.log('Pressed')}
        visible={true}
        animateFrom={'right'}
        iconMode={'static'}
        style={[styles.fabStyle]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});

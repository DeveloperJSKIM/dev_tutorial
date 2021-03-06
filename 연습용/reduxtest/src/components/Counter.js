import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index, value, handleIncrement, handleDecrement}) => {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterInfo}>
        Count: {value.counterNum}
      </Text>
      <View style={styles.counterBtnContainer}>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => handleIncrement(index)}>
          <Text>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => handleDecrement(index)}>
          <Text>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Counter.propTypes = {
  index : PropTypes.number,
  value : PropTypes.object,
  handleIncrement : PropTypes.func,
  handleDecrement : PropTypes.func,
};

Counter.defaultProps = {
  index : 0,
  value : { counterNum : 0 },
  handleIncrement : () => console.warn('handleIncrement not defined'),
  handleDecrement : () => console.warn('handleDecrement not defined'),
};



const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 10,
  },
  counterInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  counterBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#D1B2FF',
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;

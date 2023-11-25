import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DCDCE6',
    margin: 8,
    padding: 5,
  },
});

export default Body;

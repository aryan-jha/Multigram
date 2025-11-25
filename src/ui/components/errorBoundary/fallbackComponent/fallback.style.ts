import Color from '@ui/constants/FontThemes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000',
  },
  error: {
    paddingVertical: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;

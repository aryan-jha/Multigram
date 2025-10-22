import Color, { COLORS } from '@ui/constants/Themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE80,
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
    backgroundColor: COLORS.BLUE,
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;

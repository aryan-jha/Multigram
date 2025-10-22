import {useState, useEffect} from 'react';
import {Keyboard, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '@ui/store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Custom hook that Returns an object containing the state of the keyboard and a function to dismiss the keyboard.
 *
 * @return {Object} An object with the following properties:
 *   - isKeyboardOpen: A boolean indicating whether the keyboard is open or not.
 *   - dismissKeyboard: A function to dismiss the keyboard.
 */
export const useKeyboard = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    // Clean up the listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return {isKeyboardOpen, dismissKeyboard};
};

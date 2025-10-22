import {useEffect, useRef, memo} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {TOAST_TYPE, showToast} from '@data/services/toaster.service';

/**
 * @interface Props
 * @description Defined all required props
 */
interface Props {}

/**
 * @function InernetService
 * @param props
 * @description Created a internet listener componetn
 * @returns JSX
 */
function InernetService(props: Props) {
  /**
   * @description Defined internal reference
   */
  const initialValue = useRef(true);

  /**
   * @function useEffect
   * @description Created a intenet event listener and check the internet status
   */
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async state => {
      const {isConnected} = state;
      if (isConnected === true && initialValue.current != isConnected) {
        // internet Came callback
        showToast(TOAST_TYPE.SUCCESSTOAST, 'Connected', 'Internet');
      } else if (isConnected === false && initialValue.current != isConnected) {
        // internet Gone callback
        showToast(TOAST_TYPE.ERRORTOAST, 'Connection Lost', 'Internet');
      }
    });
    return unsubscribe;
  }, []);
  return null;
}

export default memo(InernetService);

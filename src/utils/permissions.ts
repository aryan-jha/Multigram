import {Alert, Linking, Platform, PermissionsAndroid} from 'react-native';
import {check, request, RESULTS, PERMISSIONS} from 'react-native-permissions';

const CurrentVersion = Platform.Version;

export type PermissionsHandlerResponse = {
  isSuccess: boolean;
  result?: string;
};

/**
 * Shows an alert with a message and a button to open settings if permission is blocked.
 *
 * @param {string} message - The message to be displayed in the alert.
 */
const showSettingsAlert = (message: string) => {
  Alert.alert(
    '',
    message,
    [
      
      {
        text: 'Cancel',
      },
      {
        text: 'Go to settings',
        onPress: () => {
          Linking.openSettings();
        },
      },
    ],
    {cancelable: false},
  );
};

/**
 * Handles camera permission for both Android and iOS.
 *
 * @return {Promise<PermissionsHandlerResponse>} A promise resolving to permission status.
 */
export async function handleCameraPermission(): Promise<PermissionsHandlerResponse> {
  const cameraPermStr =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  return new Promise(resolve => {
    check(cameraPermStr).then(result => {
      switch (result) {
        case RESULTS.LIMITED:
        case RESULTS.GRANTED:
          resolve({isSuccess: true});
          break;
        case RESULTS.UNAVAILABLE:
        case RESULTS.DENIED:
          request(cameraPermStr).then(response => {
            if (response === RESULTS.GRANTED) {
              resolve({isSuccess: true});
            } else {
              resolve({isSuccess: false});
              if (response === RESULTS.BLOCKED) {
                showSettingsAlert(
                  'This feature requires camera access. Please enable it in settings.',
                );
              }
            }
          });
          break;
        case RESULTS.BLOCKED:
          resolve({isSuccess: false});
          showSettingsAlert(
            'This feature requires camera access. Please enable it in settings.',
          );
          break;
      }
    });
  });
}

/**
 * Handles gallery permission for both Android and iOS.
 *
 * @return {Promise<PermissionsHandlerResponse>} A promise resolving to permission status.
 */
export async function handleGalleryPermission(): Promise<PermissionsHandlerResponse> {
  const galleryPermStr =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : Number(CurrentVersion) <= 12
      ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
  return new Promise(resolve => {
    check(galleryPermStr).then(result => {
      switch (result) {
        case RESULTS.LIMITED:
        case RESULTS.GRANTED:
          resolve({isSuccess: true});
          break;
        case RESULTS.UNAVAILABLE:
        case RESULTS.DENIED:
          request(galleryPermStr).then(response => {
            if (response === RESULTS.GRANTED) {
              resolve({isSuccess: true});
            } else {
              resolve({isSuccess: false});
              if (response === RESULTS.BLOCKED) {
                // showSettingsAlert(
                //   'This feature requires photo/gallery access. Please enable it in settings.',
                // );
                Alert.alert(
                  '',
                  'This feature requires photo/gallery access. Please enable it in settings.',
                  [
                    
                    {
                      text: 'Cancel',
                    },
                    {
                      text: 'Go to settings',
                      onPress: () => {
                        Linking.openSettings();
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }
            }
          });
          break;
        case RESULTS.BLOCKED:
          resolve({isSuccess: false});
          showSettingsAlert(
            'This feature requires photo/gallery access. Please enable it in settings.',
          );
          break;
      }
    });
  });
}

/**
 * Handles media (images & videos) permission for Android & gallery permission for iOS.
 *
 * @return {Promise<PermissionsHandlerResponse>} A promise resolving to permission status.
 */
export async function handleMediaPermission(): Promise<PermissionsHandlerResponse> {
  if (Platform.OS === 'android') {
    try {
      const grantedImages = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      );
      const grantedVideos = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      );

      if (
        grantedImages === PermissionsAndroid.RESULTS.GRANTED ||
        grantedVideos === PermissionsAndroid.RESULTS.GRANTED
      ) {
        return {isSuccess: true};
      } else {
        return {isSuccess: false};
      }
    } catch (error) {
      return {isSuccess: false};
    }
  } else {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (result === RESULTS.GRANTED) {
      return {isSuccess: true};
    } else {
      return {isSuccess: false};
    }
  }
}
export const requestStoragePermission = async () => {
  try {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        return (
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        );
      }
    } else {
      // iOS photo library access
      const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      return result === RESULTS.GRANTED;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

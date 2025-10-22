import { DATE_FORMAT, isRTL } from "@ui/constants/Constants";
import moment from "moment";
import { Alert, Linking, Share } from "react-native";
import { Image, Video } from "react-native-compressor";


const createQueryParams = (params: any) => {
  const newObj: any = {};
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      newObj[key] = value;
    }
  }
  return Object.entries(newObj)
    .map(e => e.join('='))
    .join('&');
};

const getFileType = (url: string) => {
  let newUrl = url?.toLowerCase();
  const videoExtensions = [
    '.mp4',
    '.avi',
    '.mov',
    '.wmv',
    '.flv',
    '.mkv',
    '.m3u8',
  ];
};


const openWhatsApp = async (phoneNumber: string, text: string) => {
  const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    text,
  )}`;

  const canOpen = await Linking.canOpenURL(url);

  if (canOpen) {
    Linking.openURL(url);
  } else {
    Alert.alert(
      'WhatsApp Not Installed',
      'Please install WhatsApp to continue.',
      [{text: 'OK'}],
    );
  }
};

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
const getProfileImageSource = (uri: string | null | undefined, defaultImg:any) => {

  return uri ? {uri} : {defaultImg};
};

const showDate = (date: any) => {
  return moment(date)
    ?.locale(isRTL ? 'ar' : 'en')
    .format(DATE_FORMAT);
};
const isValidUrl = (url: string) =>
  /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i.test(url);

export const openMaps = ({latitude, longitude}: any) => {
  const url = `comgooglemaps://?q=${latitude},${longitude}`;

  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        const browserUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        return Linking.openURL(browserUrl);
      }
    })
    .catch(err => console.error('An error occurred', err));
};
export const getRelativeTimeFromNow = (date: string | Date): string => {
  const duration = moment.duration(moment().diff(moment(date)));

  const minutes = Math.floor(duration.asMinutes());
  const hours = Math.floor(duration.asHours());
  const days = Math.floor(duration.asDays());

  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
};

export const getS3ImageUrl = async (imageUrls: any, dispatch: any) => {
  const compressedItems = await Promise.all(
    imageUrls.map(async (item:any) => {
      const mimeType = item?.mimeType || '';

      try {
        if (mimeType.includes('image')) {
          const compressedUri = await Image.compress?.(item.uri, {
            compressionMethod: 'auto',
          });

          return compressedUri ? {...item, uri: compressedUri} : item;
        }

        if (mimeType.includes('video')) {
          const compressedUri = await Video.compress?.(item.uri, {
            compressionMethod: 'auto',
            minimumFileSizeForCompress: 5,
          });

          return compressedUri ? {...item, uri: compressedUri} : item;
        }

        return item;
      } catch (error) {
        console.warn('Compression failed for:', item.uri, error);
        return [item];
      }
    }),
  );

  try {
    const newSelectedItem = compressedItems;
    let payload = newSelectedItem.map((item: any) => {
      return {
        fileName: item?.fileName || 'filename',
        folderType: item.type.includes('video') ? 2 : 1,
        mimeType: item?.mimeType,
      };
    });

    {/* Uncomment the following lines if you have a Redux action to upload to S3 */}


    // return dispatch(s3Upload({payload}))
    //   .unwrap()
    //   .then(async (response: any) => {
    //     const uploadRequests = response.map(
    //       async (item: any, index: number) => {
    //         const form = new FormData();
    //         form.append('key', item.fields.key);
    //         form.append('X-Amz-Signature', item.fields['X-Amz-Signature']);
    //         form.append('Policy', item.fields.Policy);
    //         form.append('X-Amz-Date', item.fields['X-Amz-Date']);
    //         form.append('X-Amz-Credential', item.fields['X-Amz-Credential']);
    //         form.append('X-Amz-Algorithm', item.fields['X-Amz-Algorithm']);
    //         form.append('bucket', item.fields.bucket);
    //         form.append('Content-Type', item.fields['Content-Type']);
    //         form.append('acl', item.fields.acl);
    //         form.append('file', {
    //           uri: newSelectedItem[index].uri,
    //           type: newSelectedItem[index].mimeType,
    //           name: newSelectedItem[index].fileName,
    //         });

    //         // Return a promise for the API request
    //         return axios.post(item.url, form, {
    //           headers: {
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         });
    //       },
    //     );

    //     const results = await Promise.allSettled(uploadRequests);
    //     const addedMedia = response?.map((item, index) => {
    //       return {
    //         mediaUrl: `${item?.url}${item.fields.key}`,
    //         mediaType:
    //           newSelectedItem[index].type === 'video' ? 'VIDEO' : 'IMAGE',
    //       };
    //     });
    //     return addedMedia;
    //   });
  } catch (error) {
    console.log('error while uploading', error);
    return [];
  }
};

export const deleteS3Media = async (mediaUrl: any, dispatch: any) => {
  mediaUrl?.forEach((item: any) => {
    console.log('item', item);
    const keyToDelete = item?.mediaUrl?.split('.com')[1].startsWith('/')
      ? item?.mediaUrl?.split('.com')[1].slice(1)
      : item?.mediaUrl?.split('.com')[1]
      ? item?.mediaUrl?.split('.com')[1]
      : null;

      {/* Uncomment the following lines if you have a Redux action to delete from S3 */}

    // dispatch(deleteS3({data:[keyToDelete]})).unwrap();
  });
};
export {
  createQueryParams,
  getFileType,
  Share,
  openWhatsApp,
  getProfileImageSource,
  showDate,
  isValidUrl,
};

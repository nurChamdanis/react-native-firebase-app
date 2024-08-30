import analytics from '@react-native-firebase/analytics';
import { AnalyticsEventName } from '@types';
 
export const logEvent = async (
  eventName: AnalyticsEventName,
  payload?: { [key: string]: any },
) => analytics().logEvent(eventName, payload);
 
export const instance = () => analytics();

import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = 'eae5bc0006d6b2f16112e11b8118ba57';

let isInitialized = true;

export const initAmplitude = () => {
  if (isInitialized) {
    amplitude.init(AMPLITUDE_API_KEY, undefined, {

      defaultTracking: {
        sessions: true,
        pageViews: true,
        formInteractions: true,
        fileDownloads: true,
      },
    });
    isInitialized = true;
  }
};

export const trackAmplitudeEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  if (isInitialized) {
    amplitude.track(eventName, eventProperties);
  }
};

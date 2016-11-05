import Raven from 'raven-js';

const SENTRY_KEY = '76b09b49bb1544af8e3657c490d5b527';
const SENTRY_APP = '108057';
export const SENTRY_URL = `https://${SENTRY_KEY}@sentry.io/${SENTRY_APP}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

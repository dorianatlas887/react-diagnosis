import { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';

export const browserFlagsDefault = {
  lessThan: {
    extraSmall: false,
    small: false,
    medium: false,
    large: false,
    extraLarge: false,
  },
  greaterThan: {
    extraSmall: false,
    small: false,
    medium: false,
    large: false,
    extraLarge: false,
  },
  is: {
    extraSmall: false,
    small: false,
    medium: false,
    large: false,
    extraLarge: false,
  },
  mediaType: '',
  orientation: '',
};

export const DIMENSIONS = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
};

export const DIMENSIONS_NAMES = {
  xs: 'extraSmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'extraLarge',
};

/**
 * @name calculateBrowserFlags
 * Calculate browser flags depending on the with of the user browser.
 *
 * @param {String} width xs | sm | md | lg | xl
 *
 * @returns {Object} browser object flags
 */
export function calculateBrowserFlags(width) {
  const browser = JSON.parse(JSON.stringify(browserFlagsDefault));

  browser.lessThan.extraSmall = isWidthDown(DIMENSIONS.XS, width, false);
  browser.lessThan.small = isWidthDown(DIMENSIONS.SM, width, false);
  browser.lessThan.medium = isWidthDown(DIMENSIONS.MD, width, false);
  browser.lessThan.large = isWidthDown(DIMENSIONS.LG, width, false);
  browser.lessThan.extraLarge = isWidthDown(DIMENSIONS.XL, width, false);

  browser.greaterThan.extraSmall = isWidthUp(DIMENSIONS.XS, width, false);
  browser.greaterThan.small = isWidthUp(DIMENSIONS.SM, width, false);
  browser.greaterThan.medium = isWidthUp(DIMENSIONS.MD, width, false);
  browser.greaterThan.large = isWidthUp(DIMENSIONS.LG, width, false);
  browser.greaterThan.extraLarge = isWidthUp(DIMENSIONS.XL, width, false);

  browser.is.extraSmall = DIMENSIONS.XS === width;
  browser.is.small = DIMENSIONS.SM === width;
  browser.is.medium = DIMENSIONS.MD === width;
  browser.is.large = DIMENSIONS.LG === width;
  browser.is.extraLarge = DIMENSIONS.XL === width;

  browser.mediaType = DIMENSIONS_NAMES[width];

  return browser;
}

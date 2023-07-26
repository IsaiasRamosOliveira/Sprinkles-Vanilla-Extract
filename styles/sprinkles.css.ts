import {
  defineProperties,
  createSprinkles,
} from '@vanilla-extract/sprinkles';

import palette from './colors.css';
import { fontFamily, fontWeight, lineHeight, fontSize } from './typography.css';
import { size, space, position} from './size.css';
import { borderSize, borderRadius, shadows } from './border.css';
import { style } from '@vanilla-extract/css';


const systemProperties = defineProperties({
  conditions: {
    mobile: { '@media': 'screen and (min-width: 400px)' },
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'desktop',
  properties: {
    color: palette,
    background: palette,
  }
});

export const sprinklesTailwind = createSprinkles(
  systemProperties
);

export const clickable = style ({
  ':hover': {
    cursor: 'pointer'
  }
})

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinklesTailwind >[0];

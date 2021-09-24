import type { ChakraTheme } from '@chakra-ui/react';

import textStyles from './foundations/text-styles';
import colors from './foundations/colors';
import Button from './components/button';

const theme: Partial<ChakraTheme> = {
  styles: {
    global: {
      body: {
        color: 'dark.medium',
        lineHeight: 'tall'
      }
    }
  },
  colors,
  textStyles,
  shadows: {
    'big-card':
      '0px 0px 0px 1px #E8E8E8, 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
    'small-card':
      '1px 1px 1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(44, 43, 42, 0.1), inset 0px -14px 62px rgba(0, 0, 0, 0.03)'
  },
  components: {
    Button
  }
};

export default theme;

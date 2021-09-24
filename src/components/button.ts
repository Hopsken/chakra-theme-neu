import type { Button } from '@chakra-ui/button';
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import type { SystemStyleFunction } from '@chakra-ui/theme-tools';

const ButtonStyle: ComponentStyleConfig = {
  variants: {
    solid: {
      bg: 'dark.medium',
      _hover: {
        bg: 'dark.strong'
      },
      _disabled: {
        bg: 'gray.light',
        borderColor: 'gray.light',
        color: 'gray.darker'
      }
    },
    outline: {
      borderColor: 'dark.medium',
      _hover: {
        bg: 'gray.light',
        borderColor: 'dark.strong'
      },
      _disabled: {
        bg: 'white',
        borderColor: 'gray.medium',
        color: 'gray.darker'
      }
    },
    ghost: {
      color: 'dark.medium',
      _hover: {
        color: 'dark.medium'
      },
      _disabled: {
        color: 'gray.darker'
      }
    }
  }
};

export default ButtonStyle;

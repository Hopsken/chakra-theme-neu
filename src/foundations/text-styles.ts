import type { SystemStyleObjectRecord } from '@chakra-ui/theme';

const textStyles: SystemStyleObjectRecord = {
  headline: {
    fontWeight: 700,
    fontSize: 'xl',
    color: 'dark.medium',
    lineHeight: 'tall'
  },

  title: {
    fontWeight: 700,
    fontSize: 'sm',
    lineHeight: 'shorter'
  },

  subtitle: {
    fontWeight: 400,
    fontSize: 'sm',
    lineHeight: 'shorter'
  },

  body: {
    fontWeight: 500,
    fontSize: 'xs',
    lineHeight: 'taller'
  },

  callout: {
    fontSize: 'xs',
    fontWeight: 700,
    lineHeight: 'taller'
  },

  caption: {
    fontSize: 'xs',
    fontWeight: 400,
    lineHeight: 'taller'
  }
};

export default textStyles;

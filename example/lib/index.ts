import { ChakraTheme, extendTheme } from '@chakra-ui/react'
import NeuTheme from '../../src/index'

export const theme = extendTheme(NeuTheme) as ChakraTheme

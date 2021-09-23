import React from 'react'
import { StandaloneThemeExplorer } from 'chakra-ui-theme-explorer'
import type { NextPage } from 'next'
import { theme } from 'lib'

const Home: NextPage = () => {
  return <StandaloneThemeExplorer theme={theme} />
}

export default Home

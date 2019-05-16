import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router';
import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';
import { TypographyStyle, GoogleFont } from 'react-typography';

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

import { content } from './app.module.scss';

function App() {
  const typography = new Typography(kirkhamTheme)
  return (
    <Root>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />

      <div className="content">
        <Sidebar />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App

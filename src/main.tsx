/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-05-26 23:46:38
 * @LastEditTime: 2021-10-01 09:51:23
 * @FilePath: \my-app-ts\src\main.tsx
 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Index from './pages/Index'
import './styles/reset.css'
import '@/assets/iconfont/iconfont.css'
const App = () => {
    return<Index />
}
ReactDOM.render(<App />, document.querySelector('#app'))

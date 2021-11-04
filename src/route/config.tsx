/* eslint-disable react/no-multi-comp */
/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-06-26 19:18:12
 * @LastEditTime: 2021-10-01 09:56:28
 * @FilePath: \my-app-ts\src\route\config.tsx
 */
// 路由配置文件
import * as React from 'react'
const Home = React.lazy(() => import('@/pages/Index'))
export default Home

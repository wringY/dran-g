/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-06-30 22:54:55
 * @LastEditTime: 2021-11-03 23:06:25
 * @FilePath: \my-app-ts\src\pages\Index\index.tsx
 */
import * as React from 'react'
import ToolBar from '@/components/ToolBar'
import MateriaSelect from '@/components/MaterialSelect'
import styles from './index.less'

const Index = () => {
    return (
        <div className={styles.lowPageContainer}>
            {/* 顶部工具栏 */}
            <ToolBar />
            {/* 左侧物料选择 */}
            <section style={{ paddingTop: 10 }}>
                <MateriaSelect />
            </section>
        </div>
    )
}

export default Index

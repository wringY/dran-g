/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-06-30 22:54:55
 * @LastEditTime: 2021-11-06 13:12:50
 * @FilePath: \dran-g\src\pages\Index\index.tsx
 */
import * as React from 'react'
import ToolBar from '@/components/ToolBar'
import MateriaSelect from '@/components/MaterialSelect'
import styles from './index.less'
import Editor from '@/components/Editor'

const Index = () => {
    return (
        <div className={styles.lowPageContainer}>
            {/* 顶部工具栏 */}
            <ToolBar />
            <main className={styles.main}>
                {/* 左侧物料选择 */}
                <section style={{ height: '100%' }}>
                    <MateriaSelect />
                </section>
                {/* 画布 */}
                <section>
                    <Editor />
                </section>
            </main>
        </div>
    )
}

export default Index

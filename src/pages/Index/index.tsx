/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-06-30 22:54:55
 * @LastEditTime: 2021-11-14 10:14:25
 * @FilePath: \dran-g\src\pages\Index\index.tsx
 */
import * as React from 'react'
import ToolBar from '@/components/ToolBar'
import MateriaSelect from '@/components/MaterialSelect'
import styles from './index.less'
import Canvas from '@/components/Canvas'
import { Provider } from 'react-redux'
import store from '@/store'

const Index = () => {
    return (
        <Provider store={store}>
            <div className={styles.lowPageContainer}>
                {/* 顶部工具栏 */}
                <ToolBar />
                <main className={styles.main}>
                    {/* 左侧物料选择 */}
                    <section className={styles.left}>
                        <MateriaSelect />
                    </section>
                    {/* 画布 */}
                    <section className={styles.center}>
                        <Canvas />
                    </section>
                    {/* 属性编辑 */}
                    <section className={styles.right}>属性</section>
                </main>
            </div>
        </Provider>
    )
}

export default Index

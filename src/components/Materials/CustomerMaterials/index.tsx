/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 17:32:40
 * @LastEditTime: 2021-11-04 23:24:09
 * @FilePath: \my-app-ts\src\components\Materials\CustomerMaterials\index.tsx
 */
import CImg from './Img'
import CButton from './Button'
import { MaterialIterface } from '../index'
const materialsId = 'customer-material-'
const customreMaterials: MaterialIterface[] = [
    {
        component: CButton,
        id: materialsId + 'button',
        style: {
            width: 100
        },
        props: {},
        label: '自定义按钮',
        icon: 'anniu'
    },
    {
        component: CImg,
        id: materialsId + 'img',
        style: {},
        props: {
            src: require('@/assets/imgs/test.webp')
        },
        label: '自定义图片',
        icon: 'tupian'
    }
]
export default customreMaterials

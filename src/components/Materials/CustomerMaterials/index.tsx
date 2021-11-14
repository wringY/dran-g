/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 17:32:40
 * @LastEditTime: 2021-11-14 15:48:00
 * @FilePath: \dran-g\src\components\Materials\CustomerMaterials\index.tsx
 */
import CImg from './Img'
import CButton from './Button'
import { MaterialIterface } from '../index'
import imgUrl from '@/assets/imgs/test.webp'
const customreMaterials: MaterialIterface[] = [
    {
        component: CButton,
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'left',
            color: '',
            backgroundColor: '#fff'
        },
        props: {},
        label: '自定义按钮',
        icon: 'anniu'
    },
    {
        component: CImg,
        style: {
            width: 300,
            height: 200,
            borderRadius: ''
        },
        props: {
            src: imgUrl
        },
        label: '自定义图片',
        icon: 'tupian'
    }
]
export default customreMaterials

/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 17:31:10
 * @LastEditTime: 2021-11-03 23:59:54
 * @FilePath: \my-app-ts\src\components\Materials\CustomerComponents\Img\index.tsx
 */
import * as React from 'react'
// class Img {
//     render() {
//         return <img src="https://git-scm.com/images/logo@2x.png"></img>
//     }
// }
interface ImgInterface {
    src: string
}
const CImg: React.FC<ImgInterface> = () => {
    return <img src="https://git-scm.com/images/logo@2x.png"></img>
}

export default CImg

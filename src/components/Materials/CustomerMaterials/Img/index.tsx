/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 17:31:10
 * @LastEditTime: 2021-11-14 16:23:12
 * @FilePath: \dran-g\src\components\Materials\CustomerMaterials\Img\index.tsx
 */
import * as React from 'react'

// class Img {
//     render() {
//         return <img src="https://git-scm.com/images/logo@2x.png"></img>
//     }
// }
interface ImgInterface {
    src: string
    styles: React.CSSProperties
}
const CImg: React.FC<ImgInterface> = ({ src, styles }) => {
    debugger
    return <img src={src} style={styles} />
}

export default CImg

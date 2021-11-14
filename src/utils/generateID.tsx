/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-10 19:08:23
 * @LastEditTime: 2021-11-14 10:22:41
 * @FilePath: \dran-g\src\utils\generateID.tsx
 */
/* 主要用于react的diff算法， 给画布中中每个元素生成唯一的id */
let id = 0
export default function generateId() {
    return id++
}

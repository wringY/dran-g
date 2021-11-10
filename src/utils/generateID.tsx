/* 主要用于react的diff算法， 给画布中中每个元素生成唯一的id */
let id = 0
export default function generateId() {
    return id++
}

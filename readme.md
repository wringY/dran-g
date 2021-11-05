<!--
 * @Desc:
 * @Author: wringY
 * @Date: 2021-05-26 01:50:21
 * @LastEditTime: 2021-11-03 22:11:52
 * @FilePath: \my-app-ts\readme.md
-->
# 物料库
- 使用自定义组件和内置material组件库，做为物料库。支持使用其它的UI库（CDN引入）
## 物料接口规范
- 所有的物料都需要统一规范的接口定义。左侧每个物料都需要有一下属性
~~~ts
export interface MaterialIterface {
    component: React.FC<any> // 物料对应的组件
    icon: string // 物料icon
    label: string // 物料label
    style: React.CSSProperties // 对应组件的样式
    props: {
        [key: string]: any
    }
}
~~~
## 自定义组件
## 使用内置组件扩展
## 接入第三方ui库
## 素材扩展
# 画布
# 属性编辑

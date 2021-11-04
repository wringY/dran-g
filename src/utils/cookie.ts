/*
 * @Desc: cookie封装
 * @Author: wringY
 * @Date: 2021-04-23 23:30:05
 * @LastEditTime: 2021-07-01 22:44:01
 * @FilePath: \my-app-ts\src\utils\cookie.ts
 */
/* 得出结论cookie设置的过期时间是以服务器时间为基准,在浏览器得到服务器的任何HTTP响应头后会将浏览器的时间与服务器同步.
而使用new Date()获取的本地时间并不准确.与服务器相差很大.本地时间可被客户修改.如果cookie使用本地时间可被人利用实现永久免登陆验. */
const doc = document

export interface SetCookie {
    name: string // cookie名称
    value: string // cookie内容
    path: string // cookie的作用域，主机下哪些路径可以接受Cookie(该 URL 路径必须存在于请求 URL 中)
    domain: string // cookie的作用域，哪些主机可以接受cookie。path 和 domian都是设置允许cookie发送给哪些url
    expires: number // cookie存活时间 存活多少时间失效 小时
}

export interface DelCookie {
    name: string
    path: string
    domain: string
}

export const Cookie = {
    set(options: SetCookie): void {
        const { expires = 1, name, value, path, domain } = options
        // 过期时间 = 当前时间 +有效时间段
        let expiresFormat: Date = new Date(
            +new Date() + expires * 1000 * 60 * 60
        ) // 转换为小时
        /* 生成cookie格式，name=value;expries;path;doamin;
           把value 做一个简单的编码，把过期时间转换为使用UTC时区的字符串
        */
        let templateCookie =
            name +
            '=' +
            escape(value) +
            (expiresFormat ? `; expires=${expiresFormat.toUTCString()}` : '') +
            (path ? `; path=${path}` : '') +
            (domain ? `; domain=${domain}` : '')
        // 允许cookie的长度
        if (templateCookie.length < 4096) {
            doc.cookie = templateCookie
        }
    },
    /**
     * 删除cookie 就是把cookie的过期时间设为过期的时间
     */
    del(options: DelCookie): void {
        const { name, path, domain } = options
        if (this.get(name)) {
            doc.cookie =
                name +
                '=' +
                ';expires=Thu, 01-Jan-1970 00:00:01 GMT' +
                (path ? '; ptah=' + path : '') +
                (domain ? '; domain=' + domain : '')
        }
    },
    /**
     * 获取cookie
     * @param {*} name cookie名称
     */
    get(name: string): string | null {
        var carr = doc.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`)) // 使用正则去匹配cookie
        if (carr != null) {
            return unescape(carr[2])
        }

        return null
    },
    /**
     * 使用正则表达式去寻找cookie
     * @param {*} pattern
     * @return {string}
     * @example // assume cookie is like below  // ts_uid=5458535332; ptui_loginuin=mice530@qq.com; Hm_lvt_bb8beb2d26e5d753995874b8b827291d=1367826377,1369234241;
     *      Cookie.find(/ptui_loginuin=([\S]*);/); // returns ["ptui_loginuin=mice530@qq.com;", "mice530@qq.com"]
     */
    find(pattern: RegExp): RegExpMatchArray | null {
        return doc.cookie.match(pattern)
    }
}

/*
 * @Author: fcli
 * @Date: 2023-09-04 10:34:52
 * @LastEditors: fcli
 * @LastEditTime: 2023-09-05 09:31:42
 * @FilePath: /vue-virtually-list/src/plugin/index.ts
 * @Description: 
 */
import vueVirtuallyList from './index.vue';

const VueVirtuallyList = {
    install(app:any){
        app.component('VueVirtuallyList',vueVirtuallyList);
    }
}
export default VueVirtuallyList;

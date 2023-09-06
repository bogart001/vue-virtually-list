<!--
 * @Author: fcli
 * @Date: 2023-09-04 14:12:29
 * @LastEditors: fcli
 * @LastEditTime: 2023-09-06 15:39:38
 * @FilePath: /vue-virtually-list/README.md
 * @Description: 
-->
# vue-auto-scroll


## VUE3 虚拟列表，支持动态计算数据高度

```bash
npm install @fcli/vue-virtually-list --save-dev 来安装

在项目中使用
import VueVirtuallyList from '@fcli/vue-virtually-list';
const app=createApp(App)
app.use(VueVirtuallyList);

```

示例：

```html

<div class="content">
  <vue-virtually-list :data="list" :height="400" :width="600" :itemCount="1000" :itemEstimatedSize="20" :buffCount="50">
    <template #slot-scope="{slotProps}">
      <div class="li">{{ slotProps.data.text }}</div>
    </template>
  </vue-virtually-list>
</div>

```

| 属性   | 属性名称 | 类型   | 可选值 |
| ------ | -------- | ------ | ------ |
| data  | 列表数据   | Array | [] |
| height | 虚拟容器的高度   | number | 0 |
| width | 虚拟容器的宽度   | number | 0 |
| itemCount | 滚动列表的条数   | number | 0  |
| itemEstimatedSize | 预设每行数据的高度  | number | 可不填，组件会动态计算 |
| buffCount | 上下缓冲区的条数  | number | 增加快速滚动时的流畅性 |
| #slot-scope | 插槽 ｜ object ｜ slotProps.data｜

#### slot

例：
```
  <template #slot-scope="{slotProps}">
    <div class="li">{{ slotProps.data.text }}</div>
  </template>
```
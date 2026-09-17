# Design: 工作区背景图片

## Approach

- 复用 Next.js `public/` 静态资源约定，使用根路径 `/wallhaven-28d516.jpg` 引用唯一图片文件。
- 仅在 `.workspace` 上增加原生 CSS 背景属性，使用 `cover`、`center` 和 `no-repeat` 适配视口。
- 保留工作区空的 DOM 结构，不增加图片元素或额外交互。

## Trade-offs

`background-size: cover` 会在极端宽高比下裁切图片边缘，以保证工作区始终被背景填满；后续如果需要完整展示原图，可改为 `contain`，但会留下空白边缘。

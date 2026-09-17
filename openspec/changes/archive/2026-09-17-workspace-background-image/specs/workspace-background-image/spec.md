# workspace-background-image Specification

## ADDED Requirements

### Requirement: 使用仓库内的工作区背景图片

右侧主工作区 SHALL 使用仓库 `public/wallhaven-28d516.jpg` 作为背景图片，并通过应用静态资源路径加载。

#### Scenario: 打开首页工作区

- **WHEN** 用户访问首页
- **THEN** 左侧导航栏右侧的工作区显示指定图片作为背景

### Requirement: 背景图片覆盖工作区

背景图片 SHALL 在工作区内居中、等比覆盖显示，并在不同视口尺寸下保持无重复的自适应布局。

#### Scenario: 调整浏览器窗口尺寸

- **WHEN** 用户改变浏览器窗口尺寸
- **THEN** 图片继续覆盖右侧工作区，且不产生平铺重复

### Requirement: 保持工作区为空

背景图片 SHALL 只作为视觉背景，不得引入文字、卡片、按钮、业务数据或其他工作区内容。

#### Scenario: 查看背景区域

- **WHEN** 用户查看右侧工作区
- **THEN** 除背景图片外不显示其他内容

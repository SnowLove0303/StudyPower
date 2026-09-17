## Purpose

为 StudyPower 提供一个可运行且极简的 Web 起始页面，让用户能够看到明确的顶部导航入口，同时保证尚未开发的工作区不会出现未经要求的内容。

## ADDED Requirements

### Requirement: 页面提供顶部导航栏

页面 SHALL 在视口顶部显示一个导航栏，并在导航栏中显示 `StudyPower` 品牌名称。

#### Scenario: 打开首页

- **WHEN** 用户访问应用首页
- **THEN** 页面顶部显示导航栏和 `StudyPower` 品牌名称

### Requirement: 导航栏之外保持空白

首页 SHALL 不显示思维导图、文档编辑器、卡片、按钮、图片、示例文本或其他业务内容；导航栏以下的主要内容区域 SHALL 保持空白。

#### Scenario: 查看导航栏以下区域

- **WHEN** 用户打开首页并查看导航栏以下区域
- **THEN** 该区域不显示任何业务组件或示例内容

### Requirement: 应用可运行

应用 SHALL 提供本地开发、构建和生产启动命令，并且生产构建 SHALL 成功完成。

#### Scenario: 执行生产构建

- **WHEN** 在项目根目录执行生产构建命令
- **THEN** 命令成功退出且生成可启动的生产构建

#### Scenario: 启动生产应用

- **WHEN** 用户启动生产应用并访问首页
- **THEN** 应用返回可正常渲染的首页

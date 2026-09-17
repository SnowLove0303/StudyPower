# sidebar-navigation-shell Specification

## Purpose
为 StudyPower 提供一个只包含左侧功能导航和空白主工作区的 Web 应用外壳，作为后续个人思维导图与 Word 工作台的统一入口。

## Requirements

### Requirement: 提供左侧功能导航

首页 SHALL 在视口左侧显示固定宽度的功能导航栏，并显示 `StudyPower` 品牌名称。

#### Scenario: 打开首页

- **WHEN** 用户访问应用首页
- **THEN** 页面左侧显示 StudyPower 品牌和功能导航栏

### Requirement: 显示核心功能入口

左侧导航栏 SHALL 显示工作台、思维导图、Word 工作台、我的文件和设置入口，并突出显示当前工作台入口。

#### Scenario: 查看功能导航

- **WHEN** 用户查看首页左侧区域
- **THEN** 用户可以识别上述功能入口和当前选中状态

### Requirement: 主工作区保持空白

导航栏右侧的主工作区 SHALL 保持为空白，不显示快速启动器、思维导图、Word 编辑器、文件列表、示例数据或占位文案。

#### Scenario: 查看首页主体

- **WHEN** 用户打开首页
- **THEN** 导航栏右侧只有空白工作区背景，不出现业务内容

### Requirement: 在窄屏下保持可用

页面 SHALL 在窄屏视口下将导航栏收窄为图标导航，并保留各入口的可识别性和可访问名称。

#### Scenario: 使用窄屏设备访问

- **WHEN** 视口宽度不超过 720 像素
- **THEN** 导航栏收窄且入口图标仍可见，入口仍保留可访问文本

# metal-navigation-logo Specification

## Purpose
TBD - created by archiving change metal-navigation-logo. Update Purpose after archive.

## Requirements

### Requirement: 导航栏具有金属质感

侧边导航栏 SHALL 使用深蓝灰金属渐变、低对比度高光和阴影层次，且不影响导航文本的可读性。

#### Scenario: 查看桌面端导航栏

- **WHEN** 用户在桌面端打开首页
- **THEN** 侧边导航栏呈现具有层次感的金属质感，而非单一平面色块

### Requirement: 使用无边框导航图标

导航入口图标 SHALL 不使用边框、圆角背景或独立卡片容器，并保持与入口文字的对齐关系。

#### Scenario: 查看功能入口

- **WHEN** 用户查看任一导航入口
- **THEN** 图标以无边框形式直接嵌入入口行内

### Requirement: 使用无边框嵌入式 Logo

品牌区域 SHALL 使用无边框的 `SP` 字标和 `StudyPower` 品牌文字，不得显示独立的圆角 Logo 背景框。

#### Scenario: 查看品牌区域

- **WHEN** 用户打开首页
- **THEN** StudyPower 品牌以直接嵌入导航栏的金属字标显示

### Requirement: 保持窄屏导航可用

在窄屏下 SHALL 保留无边框 Logo 字标和无边框图标入口的可识别性，不得恢复圆角图标容器。

#### Scenario: 使用窄屏设备访问

- **WHEN** 视口宽度不超过 720 像素
- **THEN** 导航栏收窄，Logo 字标和图标仍可见且不显示边框容器

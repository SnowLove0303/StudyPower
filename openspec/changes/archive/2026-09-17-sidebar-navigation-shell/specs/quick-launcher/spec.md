# quick-launcher Specification

## REMOVED Requirements

### Requirement: 展示快捷方式

**Reason**: 首页不再承担快速启动器职责，改为侧边导航工作台外壳。

#### Scenario: 首页不再展示快捷方式

- **WHEN** 用户访问应用首页
- **THEN** 页面不展示快捷方式卡片或列表

### Requirement: 搜索快捷方式

**Reason**: 快速启动器搜索交互随首页功能一并移除。

#### Scenario: 首页不再提供搜索

- **WHEN** 用户访问应用首页
- **THEN** 页面不展示快速启动器搜索框

### Requirement: 快速打开网址

**Reason**: 快速启动器网址打开交互随首页功能一并移除。

#### Scenario: 首页不再打开快捷网址

- **WHEN** 用户访问应用首页
- **THEN** 页面不提供快捷方式网址打开操作

### Requirement: 管理快捷方式

**Reason**: 首页不再提供快捷方式新增和删除操作。

#### Scenario: 首页不再管理快捷方式

- **WHEN** 用户访问应用首页
- **THEN** 页面不提供新增或删除快捷方式的操作

### Requirement: 保存快捷方式配置

**Reason**: 移除快捷方式后不再需要浏览器本地存储配置。

#### Scenario: 首页不再保存快捷方式

- **WHEN** 用户访问应用首页
- **THEN** 页面不读取或写入快速启动器本地存储配置

### Requirement: 提供键盘快速入口

**Reason**: 搜索框已移除，斜杠聚焦行为不再适用。

#### Scenario: 首页不再注册搜索快捷键

- **WHEN** 用户在首页按下 `/`
- **THEN** 页面不执行快速启动器搜索框聚焦行为

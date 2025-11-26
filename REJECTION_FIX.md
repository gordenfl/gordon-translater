# Chrome Web Store 审核拒绝修复说明

## 🚫 审核拒绝原因

**违规参考ID**: 紫色钾  
**违规内容**: 请求但不使用以下权限：贮存  
**违规说明**: 请求访问实现产品功能或服务所需的最狭窄权限。不要试图通过要求获得可能有益于尚未实施的服务或功能的许可来"未来证明"您的产品。

## 🔍 问题分析

### 问题根源
- manifest.json 中请求了 `storage` 权限
- 但代码中实际使用的是 `localStorage` API
- `localStorage` 不需要 `storage` 权限，它是浏览器内置 API
- `storage` 权限是用于 `chrome.storage` API 的

### 代码检查结果
```javascript
// script.js 第732行和737行
localStorage.setItem('googleTranslateSettings', JSON.stringify(appState));
const saved = localStorage.getItem('googleTranslateSettings');
```

## ✅ 修复方案

### 1. 移除不必要的权限
**修改前**:
```json
"permissions": [
    "storage",
    "sidePanel", 
    "activeTab",
    "scripting"
]
```

**修改后**:
```json
"permissions": [
    "sidePanel",
    "activeTab", 
    "scripting"
]
```

### 2. 更新版本号
- 从 `1.2.1` 更新到 `1.2.2`
- 遵循语义化版本号规范

### 3. 创建新的发布包
- 新包名: `gordon-translator-v1.2.2.zip`
- 文件大小: 45KB
- 包含所有必需文件

## 📋 权限说明

### 保留的权限
- `sidePanel`: 用于显示翻译面板
- `activeTab`: 用于获取当前页面信息
- `scripting`: 用于注入选择翻译功能

### 移除的权限
- `storage`: 不需要，因为使用的是 localStorage

### Host 权限（保留）
- `https://translate.googleapis.com/*`: 调用 Google Translate API
- `https://fonts.googleapis.com/*`: 加载 Google Fonts
- `https://fonts.gstatic.com/*`: 加载字体文件
- `https://cdnjs.cloudflare.com/*`: 加载 CDN 资源

## 🔄 重新提交步骤

### 1. 使用新的发布包
- 上传 `gordon-translator-v1.2.2.zip`
- 不要使用之前的 `gordon-translator-v1.2.1.zip`

### 2. 更新版本信息
- 版本号: 1.2.2
- 更新说明: 修复权限问题，移除不必要的 storage 权限

### 3. 提交审核
- 确保所有信息正确
- 提交审核
- 等待审核结果

## 📝 权限最佳实践

### 原则
1. **最小权限原则**: 只请求必需的权限
2. **功能对应**: 每个权限都要有对应的功能使用
3. **避免未来证明**: 不要为可能的功能预留权限

### 常见权限说明
- `storage`: 用于 chrome.storage API
- `localStorage`: 浏览器内置，无需权限
- `activeTab`: 访问当前活动标签页
- `scripting`: 注入脚本到页面
- `sidePanel`: 显示侧边栏

## ⚠️ 注意事项

1. **功能验证**: 确保移除权限后功能正常
2. **测试充分**: 在多个网站测试扩展功能
3. **版本管理**: 每次修改都要更新版本号
4. **文档更新**: 更新相关文档中的版本信息

## 🎯 预期结果

修复后应该能够通过审核，因为：
- 权限请求合理且必要
- 每个权限都有对应的功能使用
- 遵循了最小权限原则
- 功能完整且稳定

---

**修复完成，可以重新提交审核！** ✅


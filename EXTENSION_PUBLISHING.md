# Chrome 扩展打包与发布指南 (MV3)

## 一、本地加载调试（Load Unpacked）
1. 打开 Chrome，访问 `chrome://extensions/`
2. 右上角开启“开发者模式”
3. 点击“加载已解压的扩展程序 (Load unpacked)”
4. 选择项目根目录（包含 `manifest.json` 的目录）
5. 工具栏图标出现后，点击即可打开弹窗（即 `index.html`）

### 常见问题
- 图标未显示：请添加 `icons/` 下的 `icon16.png`、`icon32.png`、`icon48.png`、`icon128.png`
- 网络请求被拦：确保 `manifest.json` 的 `host_permissions` 包含 `https://translate.googleapis.com/*`
- 样式/字体不生效：确保 CSP 中允许 `fonts.googleapis.com` 与 `fonts.gstatic.com`，并允许 `'unsafe-inline'` 样式（已配置）

## 二、打包扩展
1. 在 `chrome://extensions/` 点击“打包扩展程序 (Pack extension)”
2. 选择扩展根目录（`manifest.json` 所在目录）
3. 生成 `.crx` 与 `.pem`（发布不需要 `.crx`，但 `.pem` 请妥善保管以便后续版本更新）

## 三、发布到 Chrome 网上应用店
1. 访问开发者控制台：https://chrome.google.com/webstore/devconsole
2. 支付一次性开发者注册费用（若尚未注册）
3. 点击“新增项目 (New Item)”，上传压缩包：
   - 将扩展根目录打包为 `.zip`（包含 `manifest.json`、`index.html`、`styles.css`、`script.js`、`icons/` 等）
4. 填写以下信息：
   - 标题、简介、详细描述（可以参考 `README.md`）
   - 图标与截图（至少 128x128 图标和 1-3 张 1280x800 截图）
   - 类别选择“效率”或“工具”
5. 设置可见性为“公开”，提交审核

## 四、版本更新建议
- 修改代码后，更新 `manifest.json` 的 `version`
- 遵循语义化版本号（如 `1.0.1` → `1.1.0` → `2.0.0`）
- 提交更新包（同样上传 `.zip`）

## 五、隐私与合规
- 本扩展仅调用 `https://translate.googleapis.com` 进行翻译
- 未采集用户输入数据；设置仅存储在浏览器 `storage`
- 在商店“隐私实践”中声明不收集个人信息

## 六、目录结构建议
```
GTranslate/
├─ manifest.json
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
├─ EXTENSION_PUBLISHING.md
└─ icons/
   ├─ icon16.png
   ├─ icon32.png
   ├─ icon48.png
   └─ icon128.png
```

## 七、提审前自查清单
- [ ] 弹窗 UI 正常（浅/深/自动主题）
- [ ] 翻译请求成功（跨域无误）
- [ ] 无 Console 报错（CSP、权限）
- [ ] 图标和截图齐全
- [ ] 版本号正确且已递增

准备好后，按上述步骤即可完成发布。祝上架顺利！





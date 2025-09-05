#!/bin/bash

# Google Translate 网站启动脚本
# 适用于 macOS 和 Linux 系统

echo "🌍 Google Translate 网站启动中..."
echo "=================================="

# 检查系统类型
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "检测到 macOS 系统"
    if command -v open &> /dev/null; then
        echo "正在启动网站..."
        open index.html
        echo "✅ 网站已在默认浏览器中打开"
    else
        echo "❌ 无法找到 'open' 命令"
        echo "请手动在浏览器中打开 index.html 文件"
    fi
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "检测到 Linux 系统"
    if command -v xdg-open &> /dev/null; then
        echo "正在启动网站..."
        xdg-open index.html
        echo "✅ 网站已在默认浏览器中打开"
    elif command -v gnome-open &> /dev/null; then
        echo "正在启动网站..."
        gnome-open index.html
        echo "✅ 网站已在默认浏览器中打开"
    else
        echo "❌ 无法找到合适的启动命令"
        echo "请手动在浏览器中打开 index.html 文件"
    fi
else
    echo "❌ 不支持的操作系统: $OSTYPE"
    echo "请手动在浏览器中打开 index.html 文件"
fi

echo ""
echo "📁 项目文件说明:"
echo "  • index.html     - 主网站文件"
echo "  • demo.html      - 功能演示页面"
echo "  • styles.css     - 样式文件"
echo "  • script.js      - 功能脚本"
echo "  • README.md      - 项目说明文档"
echo ""
echo "🔗 快速链接:"
echo "  • 主网站: file://$(pwd)/index.html"
echo "  • 演示页面: file://$(pwd)/demo.html"
echo ""
echo "💡 提示:"
echo "  • 确保有网络连接以使用翻译功能"
echo "  • 建议使用现代浏览器（Chrome、Firefox、Safari、Edge）"
echo "  • 如果遇到问题，请查看 README.md 文档"
echo ""
echo "🎉 享受翻译的乐趣！"


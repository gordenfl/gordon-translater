#!/bin/bash

# 打包 Chrome 扩展脚本
# 排除不需要的文件，只打包必要的扩展文件

VERSION="1.2.5"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_FILE="$SCRIPT_DIR/gordon-translator-v${VERSION}.zip"

echo "开始打包 Gordon Translater v${VERSION}..."

# 删除旧的打包文件（如果存在）
if [ -f "$OUTPUT_FILE" ]; then
    rm "$OUTPUT_FILE"
    echo "已删除旧的打包文件: $OUTPUT_FILE"
fi

# 创建临时目录
TEMP_DIR=$(mktemp -d)
echo "创建临时目录: $TEMP_DIR"

# 复制必要的文件到临时目录
echo "复制文件..."
cd "$SCRIPT_DIR"
cp manifest.json "$TEMP_DIR/"
cp background.js "$TEMP_DIR/"
cp content.js "$TEMP_DIR/"
cp index.html "$TEMP_DIR/"
cp script.js "$TEMP_DIR/"
cp styles.css "$TEMP_DIR/"

# 复制 icons 目录
cp -r icons "$TEMP_DIR/"

# 创建 zip 文件（排除不需要的文件）
cd "$TEMP_DIR"
zip -r "$OUTPUT_FILE" . > /dev/null
cd "$SCRIPT_DIR"

# 清理临时目录
rm -rf "$TEMP_DIR"

echo "打包完成: $OUTPUT_FILE"
if [ -f "$OUTPUT_FILE" ]; then
    echo "文件大小: $(du -h "$OUTPUT_FILE" | cut -f1)"
else
    echo "错误: 打包文件未创建"
    exit 1
fi


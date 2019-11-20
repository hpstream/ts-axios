#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd doc/ts-axios-doc

# echo "第一个参数为：$1";
npm run $1;
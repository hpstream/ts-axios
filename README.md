# ts-axios

使用 TypeScript 从零实现一个 axios

## Features

- 在浏览器端使用 XMLHttpRequest 对象通讯
- 支持 Promise API
- 支持请求和响应的拦截器
- 支持请求数据和响应数据的转换
- 支持请求的取消
- JSON 数据的自动转换
- 客户端防止 XSS

# 查看关联分支
git remote -v

# 关联分支命令
git remove add origin xxxx

# 美化提交
git add ./
npm run commit 

npm run release && npm run changelog


conventional-changelog 工作流
1. Make changes
2. Commit those changes
（1）git add . 
（2）git cz
3. Make sure Travis turns green
4. Bump version in package.json
（3）npm run release -m "chore(release): %s" -r minor
5. conventionalChangelog
（1）conventional-changelog -i CHANGELOG.md -s -p
6. Commit package.json and CHANGELOG.md files
（1）git add .
（2）git commit -m "docs(CHANGELOG): $version"
7. Tag
8. Push
（1）git push --follow-tags origin master

```
BREAKING CHANGE

不添加  BREAKING CHANGE  有可能不能gh-release
```

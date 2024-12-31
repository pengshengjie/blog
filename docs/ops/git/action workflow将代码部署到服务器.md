# action workflow将代码部署到服务器

## GitHub Actions 的作用

GitHub Actions 是一个持续集成和持续交付(CI/CD)平台，它能帮助我们自动化软件开发工作流程。主要作用包括：

1. 自动化构建和测试
   - 当代码推送到仓库时自动触发构建
   - 运行测试用例确保代码质量
   - 自动检查代码规范

2. 自动化部署
   - 将构建好的代码自动部署到服务器
   - 支持多环境部署（测试环境、生产环境等）
   - 部署失败时自动回滚

3. 工作流程自动化
   - 自动发布版本
   - 自动生成文档
   - 自动处理 issue 和 PR

4. 降低人为错误
   - 统一的部署流程
   - 减少手动操作
   - 提高部署效率

## 如何配置环境变量

在 GitHub Actions 中配置环境变量有以下几种方式：

1. 使用 GitHub Secrets（推荐）
   - 进入项目的 Settings -> Secrets and variables -> Actions
   - 点击 "New repository secret"
   - 添加需要的密钥，如：
     - SERVER_SSH_KEY：服务器 SSH 私钥
     - REMOTE_HOST：服务器地址
     - DATABASE_URL：数据库连接地址

2. 在工作流文件中直接定义
   ```yaml
   env:
     NODE_ENV: production
     BUILD_TYPE: release
   ```

3. 使用环境文件
   ```yaml
   - name: Load .env file
     run: |
       echo "DATABASE_URL=${{ secrets.DATABASE_URL }}" >> .env
   ```

4. 使用 GitHub 环境
   - 在 Settings -> Environments 创建环境
   - 为不同环境配置不同的变量
   - 在工作流中指定环境：
   ```yaml
   jobs:
     deploy:
       environment: production
   ```

注意事项：
- 敏感信息必须使用 Secrets 存储
- 避免在日志中打印敏感环境变量
- 定期更新密钥和证书
- 为不同环境使用不同的配置

## 代码示列
.github/workflows/deploy.yml

```yml
name: Build and Deploy to Aliyun

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install Yarn
      run: npm install -g yarn

    - name: Install dependencies
      run: yarn install

    - name: Build project
      run: yarn build

    - name: Deploy to Aliyun
      uses: easingthemes/ssh-deploy@v2.1.5
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
        ARGS: '-rltgoDzvO --delete'
        SOURCE: 'build/'
        REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
        REMOTE_USER: 'root'
        TARGET: '/opt/1panel/apps/openresty/openresty/www/sites/codingj.top/index'
```

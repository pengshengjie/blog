  # bael参数列表

```shell
npx babel [参数]
```
-f, --filename [filename]                   从标准输入读取时使用的文件名。这将用于源映射、错误等。
--presets [list]                            逗号分隔的预设名称列表。
--plugins [list]                            逗号分隔的插件名称列表。
--config-file [path]                        要使用的.babelrc文件的路径。
--env-name [name]                           加载配置和插件时要使用的'env'的名称。默认为BABEL_ENV的值，否则为NODE_ENV的值，否则为'development'.
--root-mode [mode]                          项目根解析模式。是'root'（默认），'upward' 或 'upward-optional'之一。
--source-type [script|module]
--no-babelrc                                是否查找.babelrc和.babelignore文件。
--ignore [list]                             **不**编译的glob路径列表。
--only [list]                               **仅**编译的glob路径列表。
--no-highlight-code                         启用或禁用代码帧的ANSI语法高亮显示（默认启用）。
--no-comments                               将注释写入生成的输出（默认为true）。
--retain-lines                              保留行号。这会导致产生非常难看的代码。
--compact [true|false|auto]                 不包括多余的空格字符和行终止符。
--minified                                  保存尽可能多的字节时打印（默认为false）。
--auxiliary-comment-before [string]         在注入的非用户代码前打印注释。
--auxiliary-comment-after [string]          在注入的非用户代码后打印注释。
-s, --source-maps [true|false|inline|both]
--source-map-target [string]                设置返回的源图上的`file`。
--source-file-name [string]                 设置返回的源图上的`sources[0]`。
--source-root [filename]                    所有源都相对于的根。
--module-root [filename]                    AMD模块格式化程序的可选前缀，省略时会在模块定义上添加到文件名。
-M, --module-ids                            为模块插入明确的id。
--module-id [string]                        为模块id指定自定义名称。
-x, --extensions [extensions]               当目录作为输入时需要编译的扩展名列表。
                                            [.js,.jsx,.es6,.es,.mjs,.cjs]
--keep-file-extension                       保留输入文件的文件扩展名。
-w, --watch                                 在文件更改时重新编译文件。
--skip-initial-build                        在观察前不编译文件。
-o, --out-file [out]                        将所有输入文件编译成一个单独的文件。
-d, --out-dir [out]                         将输入目录的模块编译成输出目录。
--relative                                  相对于输入目录或文件编译进输出目录。需要--out-dir [out]
-D, --copy-files                            当编译目录时，复制无法编译的文件。
--include-dotfiles                          在编译和复制无法编译的文件时包含dotfiles。
--no-copy-ignored                           在复制无法编译的文件时排除被忽略的文件。
--verbose                                   记录所有信息。这个选项与--quiet冲突
--quiet                                     不记录任何信息。这个选项与--verbose冲突
--delete-dir-on-start                       在编译之前删除out目录。
--out-file-extension [string]               使用特定的扩展名作为输出文件
-V, --version                               输出版本号。
-h, --help                                  输出使用信息。
```
# Session
## 简介
Session是一种记录客户端状态的机制，不同的是cookie保存在客户端浏览器中，而session保存在服务器上

## session工作原理

当客户端浏览器第一次访问服务器并发送请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对，然后将value保存到服务器中，而将key通过cookie下发给浏览器。浏览器下次访问时会携带key,服务端可以通过该key找到对应的session

## Gin中使用session
```go
package main

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/redis"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	store, _ := redis.NewStore(10, "tcp", "localhost:6379", "", []byte("secret"))
	r.Use(sessions.Sessions("mysession", store))

	// 设置session
	r.GET("/login", func(c *gin.Context) {
		session := sessions.Default(c)

		if session.Get("hello") != "world" {
			session.Set("hello", "world")
			session.Save()
		}

		c.JSON(200, gin.H{"message": session.Get("hello")})
	})

	// 清除session
	r.GET("/logout", func(c *gin.Context) {
		session := sessions.Default(c)
		session.Delete("hello")
		session.Save()
		c.JSON(200, gin.H{
			"message": "退出登录成功",
			"code":    200,
		})
	})

	// 获取session
	r.GET("/", func(c *gin.Context) {
		session := sessions.Default(c)
		token := session.Get("hello")
		if token == nil {
			c.JSON(401, gin.H{
				"message": "未登录",
				"code":    401,
			})
		}
		c.JSON(200, gin.H{
			"message": "已登录",
			"code":    200,
			"token":   token,
		})
	})

	r.Run(":4443")
}
```
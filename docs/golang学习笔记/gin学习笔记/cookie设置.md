# cookie的设置

## api详解释

```go
// SetCookie adds a Set-Cookie header to the ResponseWriter's headers.
// The provided cookie must have a valid Name. Invalid cookies may be
// silently dropped.
func (c *Context) SetCookie(name, value string, maxAge int, path, domain string, secure, httpOnly bool) {
	if path == "" {
		path = "/"
	}
	http.SetCookie(c.Writer, &http.Cookie{
		Name:     name,
		Value:    url.QueryEscape(value),
		MaxAge:   maxAge,
		Path:     path,
		Domain:   domain,
		SameSite: c.sameSite,
		Secure:   secure,
		HttpOnly: httpOnly,
	})
}

```

```go
	// 设置cookie
	r.GET("/login", func(c *gin.Context) {
		c.SetCookie("token", "123456", 60*60*24*30, "/", "localhost", false, true)
		c.JSON(200, gin.H{
			"message": "登录成功",
			"code":    200,
		})
	})

	// 清除cookie
	r.GET("/logout", func(c *gin.Context) {
		c.SetCookie("token", "", -1, "/", "localhost", false, true)
		c.JSON(200, gin.H{
			"message": "退出登录成功",
			"code":    200,
		})
	})

	// 获取cookie
	r.GET("/", func(c *gin.Context) {
		token, err := c.Cookie("token")
		if err != nil {
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
```
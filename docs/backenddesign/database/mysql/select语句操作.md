# select语句操作

## 查询所有字段
```sql
SELECT * from 表名;

```
## 查询特定的字段
```sql
SELECT 字段1,字段2,字段3 from 表名;
```

## 带别名查询(Alias)
```sql
SELECT 字段1 AS 别名1,字段2 AS 别名2 from 表名;
```
> 使用空格可以代替as,但是不推荐这样写

## 去重(DISTINCT)
```sql
SELECT DISTINCT 列名 from 表名;

SELECT DISTINCT 列名1,列名2 from 表名;
# 这段表示查询列名和列名2都不同的数据 但是这样场景几乎不存在实际意义
```

## 空值参与运算
> 如果空值参与运算在默认情况下会返回空值

```sql
# 当列1为null时,计算为0
SELECT DISTINCT 2 * IFNULL(列1, 0) AS Double列1 from 表名;
```

## 着重号``
一些保留字作为列名表名或者其他关键字参数 用``
```sql
SELECT * FROM `oder`;
```

## 查询常数
```sql
SELECT "常数", username from 表名;
```

## 显示表结构
显示表的结构,该表的字段名类型等
```
# DESCRIBE和DESC是一个意思
DESCRIBE 表名;
DESC 表名;
```


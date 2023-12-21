# Java 基础

## java 基础语法

### 我的第一个 JAVA 程序

```java
public class Main {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
```

### 基本语法

编写 Java 程序时，应注意以下几点：

- 大小写敏感

Java 是大小写敏感的，这就意味着标识符 Hello 与 hello 是不同的。

- 类名

对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass 。

- 方法名

所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。

- 源文件名
  源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）。

- 主方法入口

所有的 Java 程序由 ​public static void main(String[] args)​ 方法开始执行。

### Java 标识符

关于 Java 标识符，有以下几点需要注意：

- 所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（\_）开始
- 首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（\_）或数字的任何字符组合
- 关键字不能用作标识符
- 标识符是大小写敏感的
- 合法标识符举例：age、$salary、\_value、\_\_1_value
- 非法标识符举例：123abc、-salary

### Java 修饰符

像其他语言一样，Java 可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：

- 访问控制修饰符
  default, public , protected, private
- 非访问控制修饰符
  final, abstract, static，synchronized 和 volatile

### Java 变量

Java 中主要有如下几种类型的变量

- 局部变量
- 类变量（静态变量）
- 成员变量（非静态变量）

### Java 数组

数组是储存在堆上的对象，可以保存多个同类型变量。在后面的章节中，我们将会学到如何声明、构造以及初始化一个数组。

### Java 枚举

Java 5.0 引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的 bug 。

例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。

```java
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM, LARGE }
   FreshJuiceSize size;
}

public class FreshJuiceTest {
   public static void main(String args[]){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice. FreshJuiceSize.MEDIUM ;
   }
}
```

### Java 关键字

```
abstract	抽象方法，抽象类的修饰符
assert	断言条件是否满足
boolean	布尔数据类型
break	跳出循环或者label代码段
byte	8-bit 有符号数据类型
case	switch语句的一个条件
catch	和try搭配捕捉异常信息
char	16-bit Unicode字符数据类型
class	定义类
const	未使用
continue	不执行循环体剩余部分
default	switch语句中的默认分支
do	循环语句，循环体至少会执行一次
double	64-bit双精度浮点数
else	if条件不成立时执行的分支
enum	枚举类型
extends	表示一个类是另一个类的子类
final	表示一个值在初始化之后就不能再改变了
表示方法不能被重写，或者一个类不能有子类
finally	为了完成执行的代码而设计的，主要是为了程序的健壮性和完整性，无论有没有异常发生都执行代码。
float	32-bit单精度浮点数
for	for循环语句
goto	未使用
if	条件语句
implements	表示一个类实现了接口
import	导入类
instanceof	测试一个对象是否是某个类的实例
int	32位整型数
interface	接口，一种抽象的类型，仅有方法和常量的定义
long	64位整型数
native	表示方法用非java代码实现
new	分配新的类实例
package	一系列相关类组成一个包
private	表示私有字段，或者方法等，只能从类内部访问
protected	表示字段只能通过类或者其子类访问
子类或者在同一个包内的其他类
public	表示共有属性或者方法
return	方法返回值
short	16位数字
static	表示在类级别定义，所有实例共享的
strictfp	浮点数比较使用严格的规则
super	表示基类
switch	选择语句
synchronized	表示同一时间只能由一个线程访问的代码块
this	表示调用当前实例
或者调用另一个构造函数
throw	抛出异常
throws	定义方法可能抛出的异常
transient	修饰不要序列化的字段
try	表示代码块要做异常处理或者和finally配合表示是否抛出异常都执行finally中的代码
void	标记方法不返回任何值
volatile	标记字段可能会被多个线程同时访问，而不做同步
while	while循环
```

### Java 注释

```java
public class MyFirstJavaProgram{
   /* 这是第一个Java程序
    *它将打印Hello World
    * 这是一个多行注释的示例
    */
    public static void main(String []args){
       // 这是单行注释的示例
       /* 这个也是单行注释的示例 */
       System.out.println("Hello World");
    }
}
```

### 继承

在 Java 中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法，那么你可以将新创建的类继承该类。

利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类（super class），派生类称为子类（subclass）。

### 接口

在 Java 中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。

接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。

## Java 对象和类

在理解 Java 的类和对象之前，先简单介绍一下面向对象的程序设计。程序设计是通过对象对程序进行设计，对象代表一个实体，实体可以清楚地被识别。

Java 作为一种面向对象语言。支持以下基本概念：

- 多态
- 继承
- 封装
- 抽象
- 类
- 对象
- 实例
- 方法
- 消息解析

### Java 中的对象

现在让我们深入了解什么是对象。看看周围真实的世界，会发现身边有很多对象，车，狗，人等等。所有这些对象都有自己的状态和行为。

拿一条狗来举例，它的状态有：名字、品种、颜色，行为有：叫、摇尾巴和跑。

对比现实对象和软件对象，它们之间十分相似。

软件对象也有状态和行为。软件对象的状态就是属性，行为通过方法体现。

在软件开发中，方法操作对象内部状态的改变，对象的相互调用也是通过方法来完成。

### Java 中的类

类可以看成是创建 Java 对象的模板。

通过下面一个简单的类来理解下 Java 中类的定义：

```Java
public class Dog{
   String breed;
   int age;
   String color;
   void barking(){
   }

   void hungry(){
   }

   void sleeping(){
   }
}
```

一个类可以包含以下类型变量：

局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁。

成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。

类变量：类变量也声明在类中，方法体之外，但必须声明为 static 类型。

一个类可以拥有多个方法，在上面的例子中：​barking()​、​hungry()​ 和 ​sleeping()​ 都是 Dog 类的方法。

### Java 中的类

类可以看成是创建 Java 对象的模板。

通过下面一个简单的类来理解下 Java 中类的定义：

```java
public class Dog{
   String breed;
   int age;
   String color;
   void barking(){
   }

   void hungry(){
   }

   void sleeping(){
   }
}
```

一个类可以包含以下类型变量：

局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁。
成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。
类变量：类变量也声明在类中，方法体之外，但必须声明为 static 类型。
一个类可以拥有多个方法，在上面的例子中：​barking()​、​hungry()​ 和 ​sleeping()​ 都是 Dog 类的方法。

### 构造方法

每个类都有构造方法。如果没有显式地为类定义构造方法，Java 编译器将会为该类提供一个默认构造方法。

在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。

下面是一个构造方法示例：

```java
public class Puppy{
   public Puppy(){
   }

   public Puppy(String name){
      // 这个构造器仅有一个参数：name
   }
}
```

### 创建对象

对象是根据类创建的。在 Java 中，使用关键字 ​new​ 来创建一个新的对象。创建对象需要以下三步：

声明：声明一个对象，包括对象名称和对象类型。
实例化：使用关键字 ​new​ 来创建一个对象。
初始化：使用 ​new​ 创建对象时，会调用构造方法初始化对象。
下面是一个创建对象的例子：

```java
public class Puppy{
   public Puppy(String name){
      //这个构造器仅有一个参数：name
      System.out.println("Puppy Name is :" + name );
   }
   public static void main(String []args){
      // 下面的语句将创建一个Puppy对象
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
```

编译并运行上面的程序，会打印出下面的结果：

```shell
Puppy Name is :tommy
```

### 访问实例变量和方法

通过已创建的对象来访问成员变量和成员方法，如下所示：

```java
/* 实例化对象 */
ObjectReference = new Constructor();
/* 访问其中的变量 */
ObjectReference.variableName;
/* 访问类中的方法 */
ObjectReference.MethodName();
```

### 实例

下面的例子展示如何访问实例变量和调用成员方法：

```java
public class Puppy{
   int puppyAge;
   public Puppy(String name){
      // 这个构造器仅有一个参数：name
      System.out.println("Passed Name is :" + name );
   }

   public void setAge( int age ){
       puppyAge = age;
   }

   public int getAge( ){
       System.out.println("Puppy's age is :" + puppyAge );
       return puppyAge;
   }

   public static void main(String []args){
      /* 创建对象 */
      Puppy myPuppy = new Puppy( "tommy" );
      /* 通过方法来设定age */
      myPuppy.setAge( 2 );
      /* 调用另一个方法获取age */
      myPuppy.getAge( );
      /*你也可以像下面这样访问成员变量 */
      System.out.println("Variable Value :" + myPuppy.puppyAge );
   }
}
```

编译并运行上面的程序，产生如下结果：

```shell
Passed Name is :tommy
Puppy's age is :2
Variable Value :2
```

### 源文件声明规则

在本节的最后部分，我们将学习源文件的声明规则。当在一个源文件中定义多个类，并且还有 ​import​ 语句和 ​package​ 语句时，要特别注意这些规则。

- 一个源文件中只能有一个 ​public​ 类
- 一个源文件可以有多个非 ​public​ 类
- 源文件的名称应该和 ​public​ 类的类名保持一致。例如：源文件中 ​public​ 类的类名是 ​Employee​，那么源文件应该命名为 ​Employee.java​。
- 如果一个类定义在某个包中，那么 ​package​ 语句应该在源文件的首行。
- 如果源文件包含 ​import​ 语句，那么应该放在 ​package​ 语句和类定义之间。如果没有 ​package​ 语句，那么 ​import​ 语句应该在源文件中最前面。

​+ import​ 语句和 ​package​ 语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。

类有若干种访问级别，并且类也分不同的类型：抽象类和 ​final​ 类等。这些将在访问控制章节介绍。

除了上面提到的几种类型，Java 还有一些特殊的类，如：内部类、匿名类。

### java 包

包主要用来对类和接口进行分类。当开发 Java 程序时，可能编写成百上千的类，因此很有必要对类和接口进行分类。

### Import 语句

在 Java 中，如果给出一个完整的限定名，包括包名、类名，那么 Java 编译器就可以很容易地定位到源代码或者类。​Import​ 语句就是用来提供一个合理的路径，使得编译器可以找到某个类。

例如，下面的命令行将会命令编译器载入 java_installation/java/io 路径下的所有类

```java
import java.io.*;
```

### 一个简单的例子

在该例子中，我们创建两个类：Employee 和 EmployeeTest。

首先打开文本编辑器，把下面的代码粘贴进去。注意将文件保存为 Employee.java。

Employee 类有四个成员变量：name、age、designation 和 salary。该类显式声明了一个构造方法，该方法只有一个参数。

```java
import java.io.*;
public class Employee{
   String name;
   int age;
   String designation;
   double salary;
   // Employee 类的构造器
   public Employee(String name){
      this.name = name;
   }
   // 设置age的值
   public void empAge(int empAge){
      age =  empAge;
   }
   /* 设置designation的值*/
   public void empDesignation(String empDesig){
      designation = empDesig;
   }
   /* 设置salary的值*/
   public void empSalary(double empSalary){
      salary = empSalary;
   }
   /* 打印信息 */
   public void printEmployee(){
      System.out.println("Name:"+ name );
      System.out.println("Age:" + age );
      System.out.println("Designation:" + designation );
      System.out.println("Salary:" + salary);
   }
}
```

程序都是从 ​main​ 方法开始执行。为了能运行这个程序，必须包含 ​main​ 方法并且创建一个实例对象。

下面给出 EmployeeTest 类，该类实例化 2 个 Employee 类的实例，并调用方法设置变量的值。

将下面的代码保存在 EmployeeTest.java 文件中。

```java
import java.io.*;
public class EmployeeTest{

   public static void main(String args[]){
      /* 使用构造器创建两个对象 */
      Employee empOne = new Employee("James Smith");
      Employee empTwo = new Employee("Mary Anne");

      // 调用这两个对象的成员方法
      empOne.empAge(26);
      empOne.empDesignation("Senior Software Engineer");
      empOne.empSalary(1000);
      empOne.printEmployee();

      empTwo.empAge(21);
      empTwo.empDesignation("Software Engineer");
      empTwo.empSalary(500);
      empTwo.printEmployee();
   }
}
```

编译这两个文件并且运行 EmployeeTest 类，可以看到如下结果：

```shell
C :> javac Employee.java
C :> vi EmployeeTest.java
C :> javac  EmployeeTest.java
C :> java EmployeeTest
Name:James Smith
Age:26
Designation:Senior Software Engineer
Salary:1000.0
Name:Mary Anne
Age:21
Designation:Software Engineer
Salary:500.0
```

## Java 基本数据类型

变量就是申请内存来存储值。也就是说，当创建变量的时候，需要在内存中申请空间。

内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用来储存该类型数据。

因此，通过定义不同类型的变量，可以在内存中储存整数、小数或者字符。

Java 的两大数据类型：

- 内置数据类型
- 引用数据类型

### 内置数据类型

Java 语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。

#### byte 型：

byte 数据类型是 8 位、有符号的，以二进制补码表示的整数；
最小值是-128（-2^7）；
最大值是 127（2^7-1）；
默认值是 0；
byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一；
例子：byte a = 100，byte b = -50。

#### short 型（短整型）：

short 数据类型是 16 位、有符号的以二进制补码表示的整数
最小值是-32768（-2^15）；
最大值是 32767（2^15 - 1）；
Short 数据类型也可以像 byte 那样节省空间。一个 short 变量是 int 型变量所占空间的二分之一；
默认值是 0；
例子：short s = 1000，short r = -20000。

#### int 型（整型）：

int 数据类型是 32 位、有符号的以二进制补码表示的整数；
最小值是-2,147,483,648（-2^31）；
最大值是 2,147,483,647（2^31 - 1）；
一般地整型变量默认为 int 类型；
默认值是 0；
例子：int a = 100000, int b = -200000。

#### long（长整型）：

long 数据类型是 64 位、有符号的以二进制补码表示的整数；
最小值是-9,223,372,036,854,775,808（-2^63）；
最大值是 9,223,372,036,854,775,807（2^63 -1）；
这种类型主要使用在需要比较大整数的系统上；
默认值是 0L；
例子： long a = 100000L，long b = -200000L。

#### float（单精度浮点型）：

float 数据类型是单精度、32 位、符合 IEEE 754 标准的浮点数；
float 在储存大型浮点数组的时候可节省内存空间；
默认值是 0.0f；
浮点数不能用来表示精确的值，如货币；
例子：float f1 = 234.5f。

#### double（双精度浮点型）：

double 数据类型是双精度、64 位、符合 IEEE 754 标准的浮点数；
浮点数的默认类型为 double 类型；
double 类型同样不能表示精确的值，如货币；
默认值是 0.0d；
例子：double d1 = 123.4。

#### boolean（布尔型）：

boolean 数据类型表示一位的信息；
只有两个取值：true 和 false；
这种类型只作为一种标志来记录 true/false 情况；
默认值是 false；
例子：boolean one = true。

#### char（字符型）：

char 类型是一个单一的 16 位 Unicode 字符；
最小值是’\u0000’（即为 0）；
最大值是’\uffff’（即为 65,535）；
char 数据类型可以储存任何字符；
例子：char letter = ‘A’。

## 实例

对于数值类型的基本类型的取值范围，我们无需强制去记忆，因为它们的值都已经以常量的形式定义在对应的包装类中了。请看下面的例子：

```java
public class PrimitiveTypeTest {
public static void main(String[] args) {
// byte
System.out.println("基本类型：byte 二进制位数：" + Byte.SIZE);
System.out.println("包装类：java.lang.Byte");
System.out.println("最小值：Byte.MIN_VALUE=" + Byte.MIN_VALUE);
System.out.println("最大值：Byte.MAX_VALUE=" + Byte.MAX_VALUE);
System.out.println();

    // short
    System.out.println("基本类型：short 二进制位数：" + Short.SIZE);
    System.out.println("包装类：java.lang.Short");
    System.out.println("最小值：Short.MIN_VALUE=" + Short.MIN_VALUE);
    System.out.println("最大值：Short.MAX_VALUE=" + Short.MAX_VALUE);
    System.out.println();

    // int
    System.out.println("基本类型：int 二进制位数：" + Integer.SIZE);
    System.out.println("包装类：java.lang.Integer");
    System.out.println("最小值：Integer.MIN_VALUE=" + Integer.MIN_VALUE);
    System.out.println("最大值：Integer.MAX_VALUE=" + Integer.MAX_VALUE);
    System.out.println();

    // long
    System.out.println("基本类型：long 二进制位数：" + Long.SIZE);
    System.out.println("包装类：java.lang.Long");
    System.out.println("最小值：Long.MIN_VALUE=" + Long.MIN_VALUE);
    System.out.println("最大值：Long.MAX_VALUE=" + Long.MAX_VALUE);
    System.out.println();

    // float
    System.out.println("基本类型：float 二进制位数：" + Float.SIZE);
    System.out.println("包装类：java.lang.Float");
    System.out.println("最小值：Float.MIN_VALUE=" + Float.MIN_VALUE);
    System.out.println("最大值：Float.MAX_VALUE=" + Float.MAX_VALUE);
    System.out.println();

    // double
    System.out.println("基本类型：double 二进制位数：" + Double.SIZE);
    System.out.println("包装类：java.lang.Double");
    System.out.println("最小值：Double.MIN_VALUE=" + Double.MIN_VALUE);
    System.out.println("最大值：Double.MAX_VALUE=" + Double.MAX_VALUE);
    System.out.println();

    // char
    System.out.println("基本类型：char 二进制位数：" + Character.SIZE);
    System.out.println("包装类：java.lang.Character");
    // 以数值形式而不是字符形式将Character.MIN_VALUE输出到控制台
    System.out.println("最小值：Character.MIN_VALUE="
            + (int) Character.MIN_VALUE);
    // 以数值形式而不是字符形式将Character.MAX_VALUE输出到控制台
    System.out.println("最大值：Character.MAX_VALUE="
            + (int) Character.MAX_VALUE);

}
}
```

编译以上代码输出结果如下所示：

```java
基本类型：byte 二进制位数：8
包装类：java.lang.Byte
最小值：Byte.MIN_VALUE=-128
最大值：Byte.MAX_VALUE=127
基本类型：short 二进制位数：16
包装类：java.lang.Short
最小值：Short.MIN_VALUE=-32768
最大值：Short.MAX_VALUE=32767

基本类型：int 二进制位数：32
包装类：java.lang.Integer
最小值：Integer.MIN_VALUE=-2147483648
最大值：Integer.MAX_VALUE=2147483647

基本类型：long 二进制位数：64
包装类：java.lang.Long
最小值：Long.MIN_VALUE=-9223372036854775808
最大值：Long.MAX_VALUE=9223372036854775807

基本类型：float 二进制位数：32
包装类：java.lang.Float
最小值：Float.MIN_VALUE=1.4E-45
最大值：Float.MAX_VALUE=3.4028235E38

基本类型：double 二进制位数：64
包装类：java.lang.Double
最小值：Double.MIN_VALUE=4.9E-324
最大值：Double.MAX_VALUE=1.7976931348623157E308

基本类型：char 二进制位数：16
包装类：java.lang.Character
最小值：Character.MIN_VALUE=0
最大值：Character.MAX_VALUE=65535
Float 和 Double 的最小值和最大值都是以科学记数法的形式输出的，结尾的"E+数字"表示 E 之前的数字要乘以 10 的“数字”次幂。比如 3.14E3 就是 3.14×1000=3140，3.14E-3 就是 3.14/1000=0.00314。
```

实际上，JAVA 中还存在另外一种基本类型 void，它也有对应的包装类 java.lang.Void，不过我们无法直接对它们进行操作。

### 引用类型

引用类型变量由类的构造函数创建，可以使用它们访问所引用的对象。这些变量在声明时被指定为一个特定的类型，比如 Employee、Pubby 等。变量一旦声明后，类型就不能被改变了。
对象、数组都是引用数据类型。
所有引用类型的默认值都是 null。
一个引用变量可以用来引用与任何与之兼容的类型。
例子：Animal animal = new Animal(“giraffe”)。

### Java 常量

常量就是一个固定值。它们不需要计算，直接代表相应的值。

常量指不能改变的量。 在 Java 中用 final 标志，声明方式和变量类似：

```java
final double PI = 3.1415927;
```

虽然常量名也可以用小写，但为了便于识别，通常使用大写字母表示常量。

字面量可以赋给任何内置类型的变量。例如：

```java
byte a = 68;
char a = 'A'
```

byte、int、long、和 short 都可以用十进制、16 进制以及 8 进制的方式来表示。

当使用常量的时候，前缀 0 表明是 8 进制，而前缀 0x 代表 16 进制。例如：

```java
int decimal = 100;
int octal = 0144;
int hexa = 0x64;
```

和其他语言一样，Java 的字符串常量也是包含在两个引号之间的字符序列。下面是字符串型字面量的例子：

```java
"Hello World"
"two\nlines"
"\"This is in quotes\""
```

字符串常量和字符常量都可以包含任何 Unicode 字符。例如：

```java
char a = '\u0001';
String a = "\u0001";
```

Java 语言支持一些特殊的转义字符序列。

```
\n 换行 (0x0a)
\r 回车 (0x0d)
\f 换页符(0x0c)
\b 退格 (0x08)
\0 空字符（0x0）
\s 字符串
\t 制表符
\" 双引号
\' 单引号
\\ 反斜杠
\ddd 八进制字符 (ddd)
\uxxxx 16 进制 Unicode 字符 (xxxx)
```

这一节讲解了 Java 的基本数据类型。下一节将探讨不同的变量类型以及它们的用法。

## 变量类型

在 Java 语言中，所有的变量在使用前必须声明。声明变量的基本格式如下：

type identifier [ = value], identifier [= value] ...] ;
格式说明：type 为 Java 数据类型。identifier 是变量名。可以使用逗号隔开来声明多个同类型变量。

以下列出了一些变量的声明实例。注意有些包含了初始化过程。

```java
int a, b, c;         // 声明三个int型整数：a、b、c。
int d = 3, e, f = 5; // 声明三个整数并赋予初值。
byte z = 22;         // 声明并初始化z。
double pi = 3.14159; // 声明了pi。
char x = 'x';        // 变量x的值是字符'x'。
```

Java 语言支持的变量类型有：

- 局部变量
  类的方法中的变量。
- 实例变量
  独立于方法之外的变量，不过没有 static 修饰。
- 类变量
  独立于方法之外的变量，用 static 修饰。

```java
public class Variable{
    static int allClicks=0;    // 类变量

    String str="hello world";  // 实例变量

    public void method(){
        int i =0;  // 局部变量
    }
}
```

### Java 局部变量

局部变量声明在方法、构造方法或者语句块中；
局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁；
访问修饰符不能用于局部变量；
局部变量只在声明它的方法、构造方法或者语句块中可见；
局部变量是在栈上分配的。
局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。

### 实例 1

在以下实例中 age 是一个局部变量。定义在 pupAge() 方法中，它的作用域就限制在这个方法中。

```java
public class Test{
   public void pupAge(){
      int age = 0;
      age = age + 7;
      System.out.println("Puppy age is : " + age);
   }

   public static void main(String args[]){
      Test test = new Test();
      test.pupAge();
   }
}
```

以上实例编译运行结果如下：

Puppy age is: 7

### 实例 2

在下面的例子中 age 变量没有初始化，所以在编译时出错。

```java
public class Test{
   public void pupAge(){
      int age;
      age = age + 7;
      System.out.println("Puppy age is : " + age);
   }

   public static void main(String args[]){
      Test test = new Test();
      test.pupAge();
   }
}
```

以上实例编译运行结果如下:

```java
Test.java:4:variable number might not have been initialized
age = age + 7;
         ^
1 error
```

### 实例变量

实例变量声明在一个类中，但在方法、构造方法和语句块之外；
当一个对象被实例化之后，每个实例变量的值就跟着确定；
实例变量在对象创建的时候创建，在对象被销毁的时候销毁；
实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息；
实例变量可以声明在使用前或者使用后；
访问修饰符可以修饰实例变量；
实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见；
实例变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定；
实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。
实例：

```java
import java.io.*;
public class Employee{
   // 这个成员变量对子类可见
   public String name;
   // 私有变量，仅在该类可见
   private double salary;
   //在构造器中对name赋值
   public Employee (String empName){
      name = empName;
   }
   //设定salary的值
   public void setSalary(double empSal){
      salary = empSal;
   }
   // 打印信息
   public void printEmp(){
      System.out.println("name  : " + name );
      System.out.println("salary :" + salary);
   }

   public static void main(String args[]){
      Employee empOne = new Employee("Ransika");
      empOne.setSalary(1000);
      empOne.printEmp();
   }
}
```

以上实例编译运行结果如下:

```java
name  : Ransika
salary :1000.0
```

### 类变量（静态变量）

类变量也称为静态变量，在类中以 static 关键字声明，但必须在方法、构造方法和语句块之外。
无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。
静态变量除了被声明为常量外很少使用。常量是指声明为 public/private，final 和 static 类型的变量。常量初始化后不可改变。
静态变量储存在静态存储区。经常被声明为常量，很少单独使用 static 声明变量。
静态变量在程序开始时创建，在程序结束时销毁。
与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。
默认值和实例变量相似。数值型变量默认值是 0，布尔型默认值是 false，引用类型默认值是 null。变量的值可以在声明的时候指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。
静态变量可以通过：ClassName.VariableName 的方式访问。
类变量被声明为 public static final 类型时，类变量名称必须使用大写字母。如果静态变量不是 public 和 final 类型，其命名方式与实例变量以及局部变量的命名方式一致。
实例：

```java
import java.io.*;
public class Employee{
   //salary是静态的私有变量
   private static double salary;
   // DEPARTMENT是一个常量
   public static final String DEPARTMENT = "Development ";
   public static void main(String args[]){
      salary = 1000;
      System.out.println(DEPARTMENT+"average salary:"+salary);
   }
}
```

以上实例编译运行结果如下:

```java
Development average salary:1000
```

注意：如果其他类想要访问该变量，可以这样访问：Employee.DEPARTMENT。

## Java StringBuffer 和 StringBuilder 类

当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。

和String类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。

StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 StringBuilder 的方法不是线程安全的（线程安全就是多线程访问时，采用了加锁机制，当一个线程访问该类的某个数据时，进行保护，其他线程不能进行访问直到该线程读取完，其他线程才可使用。不会出现数据不一致或者数据污染。线程不安全就是不提供数据访问保护，有可能出现多个线程先后更改数据造成所得到的数据是脏数据）。

由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。然而在应用程序要求线程安全的情况下，则必须使用 StringBuffer 类。

实例
```
public class Test{

    public static void main(String args[]){
       StringBuffer sBuffer = new StringBuffer(" test");
       sBuffer.append(" String Buffer");
       System.out.println(sBuffer);  
   }
}
```
以上实例编译运行结果如下：

test String Buffer
StringBuffer 方法
以下是 StringBuffer 类支持的主要方法：
```
序号	方法描述
1	public StringBuffer append(String s)
将指定的字符串追加到此字符序列。
2	public StringBuffer reverse()
 将此字符序列用其反转形式取代。
3	public delete(int start, int end)
移除此序列的子字符串中的字符。
4	public insert(int offset, int i)
将 int 参数的字符串表示形式插入此序列中。
5	replace(int start, int end, String str)
使用给定 String 中的字符替换此序列的子字符串中的字符。
```
下面的列表里的方法和 String 类的方法类似：

```
序号	方法描述
1	int capacity()
返回当前容量。
2	char charAt(int index)
返回此序列中指定索引处的 char 值。
3	void ensureCapacity(int minimumCapacity)
确保容量至少等于指定的最小值。
4	void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
将字符从此序列复制到目标字符数组 dst。
5	int indexOf(String str)
返回第一次出现的指定子字符串在该字符串中的索引。
6	int indexOf(String str, int fromIndex)
从指定的索引处开始，返回第一次出现的指定子字符串在该字符串中的索引。
7	int lastIndexOf(String str)
返回最右边出现的指定子字符串在此字符串中的索引。
8	int lastIndexOf(String str, int fromIndex)
返回最后一次出现的指定子字符串在此字符串中的索引。
9	int length()
 返回长度（字符数）。
10	void setCharAt(int index, char ch)
将给定索引处的字符设置为 ch。
11	void setLength(int newLength)
设置字符序列的长度。
12	CharSequence subSequence(int start, int end)
返回一个新的字符序列，该字符序列是此序列的子序列。
13	String substring(int start)
返回一个新的 String，它包含此字符序列当前所包含的字符子序列。
14	String substring(int start, int end)
返回一个新的 String，它包含此序列当前所包含的字符子序列。
15	String toString()
返回此序列中数据的字符串表示形式。
```

## Java 流(Stream)、文件(File)和IO
Java.io 包几乎包含了所有操作输入、输出需要的类。所有这些流类代表了输入源和输出目标。

Java.io 包中的流支持很多种格式，比如：基本类型、对象、本地化字符集等等。

一个流可以理解为一个数据的序列。输入流表示从一个源读取数据，输出流表示向一个目标写数据。

Java为I/O 提供了强大的而灵活的支持，使其更广泛地应用到文件传输和网络编程中。

但本节讲述最基本的和流与 I/O 相关的功能。我们将通过一个个例子来学习这些功能。

### 读取控制台输入
Java 的控制台输入由 System.in 完成。

为了获得一个绑定到控制台的字符流，你可以把 System.in 包装在一个 BufferedReader 对象中来创建一个字符流。

下面是创建 BufferedReader 的基本语法：

BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
BufferedReader 对象创建后，我们便可以使用 read() 方法从控制台读取一个字符，或者用 readLine() 方法读取一个字符串。

### 从控制台读取多字符输入
从 BufferedReader 对象读取一个字符要使用 read() 方法，它的语法如下：

int read() throws IOException
每次调用 read() 方法，它从输入流读取一个字符并把该字符作为整数值返回。 当流结束的时候返回 -1。该方法抛出 IOException。

下面的程序示范了用 read() 方法从控制台不断读取字符直到用户输入 "q" 。

// 使用 BufferedReader 在控制台读取字符
```java
import java.io.*;

public class BRRead {
   public static void main(String args[]) throws IOException
   {
      char c;
      // 使用 System.in 创建 BufferedReader 
      BufferedReader br = new BufferedReader(new 
                         InputStreamReader(System.in));
      System.out.println("输入字符, 按下 'q' 键退出.");
      // 读取字符
      do {
         c = (char) br.read();
         System.out.println(c);
      } while(c != 'q');
   }
}
```
以上实例编译运行结果如下:
```
输入字符, 按下 'q' 键退出.
123abcq
1
2
3
a
b
c
q
```
### 从控制台读取字符串
从标准输入读取一个字符串需要使用 BufferedReader 的 readLine() 方法。

它的一般格式是：

String readLine() throws IOException
下面的程序读取和显示字符行直到你输入了单词 "end"。
```java
// 使用 BufferedReader 在控制台读取字符
import java.io.*;
public class BRReadLines {
   public static void main(String args[]) throws IOException
   {
      // 使用 System.in 创建 BufferedReader 
      BufferedReader br = new BufferedReader(new
                              InputStreamReader(System.in));
      String str;
      System.out.println("Enter lines of text.");
      System.out.println("Enter 'end' to quit.");
      do {
         str = br.readLine();
         System.out.println(str);
      } while(!str.equals("end"));
   }
}
```
以上实例编译运行结果如下:

Enter lines of text.
Enter 'end' to quit.
This is line one
This is line one
This is line two
This is line two
end
end
### 控制台输出
在此前已经介绍过，控制台的输出由 print() 和 println() 完成。这些方法都由类 PrintStream 定义，System.out 是该类对象的一个引用。

PrintStream 继承了 OutputStream 类，并且实现了方法 write()。这样，write() 也可以用来往控制台写操作。

PrintStream 定义 write() 的最简单格式如下所示：

void write(int byteval)
该方法将 byteval 的低八位字节写到流中。

实例
下面的例子用 write() 把字符 "A" 和紧跟着的换行符输出到屏幕：
```java
import java.io.*;

// 演示 System.out.write().
public class WriteDemo {
   public static void main(String args[]) {
      int b; 
      b = 'A';
      System.out.write(b);
      System.out.write('\n');
   }
}
```
运行以上实例在输出窗口输出 "A" 字符

A
注意：write() 方法不经常使用，因为 print() 和 println() 方法用起来更为方便。

### 读写文件
如前所述，一个流被定义为一个数据序列。输入流用于从源读取数据，输出流用于向目标写数据。

下图是一个描述输入流和输出流的类层次图。



下面将要讨论的两个重要的流是 FileInputStream 和 FileOutputStream：

### FileInputStream
该流用于从文件读取数据，它的对象可以用关键字 new 来创建。

有多种构造方法可用来创建对象。

可以使用字符串类型的文件名来创建一个输入流对象来读取文件：
```java
InputStream f = new FileInputStream("C:/java/hello");
```
也可以使用一个文件对象来创建一个输入流对象来读取文件。我们首先得使用 File() 方法来创建一个文件对象：
```java
File f = new File("C:/java/hello");
InputStream f = new FileInputStream(f);
```
创建了 InputStream 对象，就可以使用下面的方法来读取流或者进行其他的流操作。
```
序号	方法及描述
1	public void close() throws IOException{}
关闭此文件输入流并释放与此流有关的所有系统资源。抛出 IOException 异常。
2	protected void finalize()throws IOException {}
这个方法清除与该文件的连接。确保在不再引用文件输入流时调用其 close 方法。抛出 IOException 异常。
3	public int read(int r)throws IOException{}
这个方法从 InputStream 对象读取指定字节的数据。返回为整数值。返回下一字节数据，如果已经到结尾则返回 -1。
4	public int read(byte[] r) throws IOException{}
这个方法从输入流读取 r.length 长度的字节。返回读取的字节数。如果是文件结尾则返回 -1。
5	public int available() throws IOException{}
返回下一次对此输入流调用的方法可以不受阻塞地从此输入流读取的字节数。返回一个整数值。
```
除了 InputStream 外，还有一些其他的输入流，更多的细节参考下面链接：

ByteArrayInputStream

DataInputStream

FileOutputStream
该类用来创建一个文件并向文件中写数据。

如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。

有两个构造方法可以用来创建 FileOutputStream 对象。

使用字符串类型的文件名来创建一个输出流对象：

OutputStream f = new FileOutputStream("C:/java/hello")
也可以使用一个文件对象来创建一个输出流来写文件。我们首先得使用 File() 方法来创建一个文件对象：

File f = new File("C:/java/hello");
OutputStream f = new FileOutputStream(f);
创建 OutputStream 对象完成后，就可以使用下面的方法来写入流或者进行其他的流操作。
```
序号	方法及描述
1	public void close() throws IOException{}
关闭此文件输入流并释放与此流有关的所有系统资源。抛出 IOException 异常。
2	protected void finalize()throws IOException {}
这个方法清除与该文件的连接。确保在不再引用文件输入流时调用其 close 方法。抛出 IOException 异常。
3	public void write(int w)throws IOException{}
这个方法把指定的字节写到输出流中。
4	public void write(byte[] w)
把指定数组中 w.length 长度的字节写到 OutputStream 中。
```
除了 OutputStream 外，还有一些其他的输出流，更多的细节参考下面链接：

ByteArrayOutputStream

DataOutputStream

实例
下面是一个演示 InputStream 和 OutputStream 用法的例子：
```java
import java.io.*;
 
public class fileStreamTest {
    public static void main(String args[]) {
        try {
            byte bWrite[] = { 11, 21, 3, 40, 5 };
            OutputStream os = new FileOutputStream("test.txt");
            for (int x = 0; x < bWrite.length; x++) {
                os.write(bWrite[x]); // writes the bytes
            }
            os.close();
 
            InputStream is = new FileInputStream("test.txt");
            int size = is.available();
 
            for (int i = 0; i < size; i++) {
                System.out.print((char) is.read() + "  ");
            }
            is.close();
        } catch (IOException e) {
            System.out.print("Exception");
        }
    }
}
```
上面的程序首先创建文件 test.txt，并把给定的数字以二进制形式写进该文件，同时输出到控制台上。

以上代码由于是二进制写入，可能存在乱码，你可以使用以下代码实例来解决乱码问题：
```java
//文件名 :fileStreamTest2.java
import java.io.*;

public class fileStreamTest2{
	public static void main(String[] args) throws IOException {
		
		File f = new File("a.txt");
		FileOutputStream fop = new FileOutputStream(f);
		// 构建FileOutputStream对象,文件不存在会自动新建
		
		OutputStreamWriter writer = new OutputStreamWriter(fop, "UTF-8");
		// 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk
		
		writer.append("中文输入");
		// 写入到缓冲区
		
		writer.append("\r\n");
		//换行
		
		writer.append("English");
		// 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入
		
		writer.close();
		//关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉
		
		fop.close();
		// 关闭输出流,释放系统资源

		FileInputStream fip = new FileInputStream(f);
		// 构建FileInputStream对象
		
		InputStreamReader reader = new InputStreamReader(fip, "UTF-8");
		// 构建InputStreamReader对象,编码与写入相同

		StringBuffer sb = new StringBuffer();
		while (reader.ready()) {
			sb.append((char) reader.read());
			// 转成char加到StringBuffer对象中
		}
		System.out.println(sb.toString());
		reader.close();
		// 关闭读取流
		
		fip.close();
		// 关闭输入流,释放系统资源

	}
}
```

### 文件和I/O
还有一些关于文件和 I/O 的类，我们也需要知道：

File Class(类)

FileReader Class(类)

FileWriter Class(类)

### Java中的目录
创建目录：
File 类中有两个方法可以用来创建文件夹：

+ mkdir( ) 方法创建一个文件夹，成功则返回 true，失败则返回 false。失败表明 File 对象指定的路径已经存在，或者由于整个路径还不存在，该文件夹不能被创建。

+ mkdirs( ) 方法创建一个文件夹和它的所有父文件夹。

下面的例子创建 "/tmp/user/java/bin" 文件夹：
```java
import java.io.File;

public class CreateDir {
   public static void main(String args[]) {
      String dirname = "/tmp/user/java/bin";
      File d = new File(dirname);
      // 现在创建目录
      d.mkdirs();
  }
}
```
编译并执行上面代码来创建目录 "/tmp/user/java/bin"。

注意：Java 在 UNIX 和 Windows 自动按约定分辨文件路径分隔符。如果你在 Windows 版本的 Java 中使用分隔符(/) ，路径依然能够被正确解析。

读取目录
一个目录其实就是一个 File 对象，它包含其他文件和文件夹。

如果创建一个 File 对象并且它是一个目录，那么调用 isDirectory( ) 方法会返回 true。

可以通过调用该对象上的 list() 方法，来提取它包含的文件和文件夹的列表。

下面展示的例子说明如何使用 list() 方法来检查一个文件夹中包含的内容：
```java
import java.io.File;

public class DirList {
   public static void main(String args[]) {
      String dirname = "/tmp";
      File f1 = new File(dirname);
      if (f1.isDirectory()) {
         System.out.println( "Directory of " + dirname);
         String s[] = f1.list();
         for (int i=0; i < s.length; i++) {             
            File f = new File(dirname + "/" + s[i]);             
            if (f.isDirectory()) {                
                System.out.println(s[i] + "是一个目录");             
            } else {
                System.out.println(s[i] + "是一个文件");
             }
        }
     } else {
          System.out.println(dirname + "不是一个目录");
     }
  }
}
```
以上实例编译运行结果如下：

目录 /tmp
bin 是一个目录
lib 是一个目录
demo 是一个目录
test.txt 是一个文件
README 是一个文件
index.html 是一个文件
include 是一个目录
### 删除目录或文件
删除文件可以使用 java.io.File.delete() 方法。

以下代码会删除目录 /tmp/java/，需要注意的是当删除某一目录时，必须保证该目录下没有其他文件才能正确删除，否则将删除失败。

### 测试目录结构：
```
/tmp/java/
|-- 1.log
|-- test
```
DeleteFileDemo.java 文件代码：
```java
import java.io.File;
public class DeleteFileDemo {
    public static void main(String args[]) {
        // 这里修改为自己的测试目录
        File folder = new File("/tmp/java/");
        deleteFolder(folder);
    }
    // 删除文件及目录
    public static void deleteFolder(File folder) {
        File[] files = folder.listFiles();
        if (files != null) {
            for (File f : files) {
                if (f.isDirectory()) {
                    deleteFolder(f);
                } else {
                    f.delete();
                }
            }
        }
        folder.delete();
    }
}
```
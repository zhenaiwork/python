# 00
>所有的符合都为英文状态下输入
# 01
>  * 输出函数 print()
>>* print()函数输出的内容:
>>>* 可以是数字,字符串,含有运算的表达式.
>>* print()函数可以输出的目的.
>>>* 显示器  (默认)
>>>* 文件     (使用'open'和'file')
>>>>* 比如:
>>>>* fp=open('h:o.txt','a+')#打开h盘中的o.txt，'a+'如果没有就创建一个.
>>>>* print('hellwork',file=fp)#把hellwork输出到‘l’这个指令下.
>>>>* fp.close()#关闭.
>>* print()函数输出的形式.
>>>* 换行.   (默认)
>>>* 不换行. (用逗号隔开)
>>>>* 比如：
>>>>* print('hell','minecraft','hmcl')

# 02
>* 为什么需要转义字符?
>* 当字符串中包含反斜杠,单引号和双引号等特殊用途的字符时,必须有 \ 对这些字符进行转义(转换一个含义)
>>* 反斜杠:\\
>>>* 比如:
>>>* print('http:\\\\www.blibli.com')#两个反斜杠只会输出一个
>>>* .>>>'http:\\www.blibli.com
>*单引号:\'
>>* 比如:
>>* print('我说:\'你们好\'')#把反斜杠后的 ' 当字符串输出
>>* .>>>我说:'你们好'
>* 双引号:\"
>>* 当字符串中包括换行，回车，水平制表符或退格等无法直接表示的特殊字符时，也可以使用转义字符串中包括换行，回车，水平制表符或退格等无法直接表示的特殊字符时，也可以使用转义字符
>>* 换行:\n
>>* 比如:
>>* print('hello\nwold')#\加n  n>newline的首字符表示换行
>>* .>>>
>>* hello
>>* world
>* 回车:\r
>>* 比如:
>>* print('hello\rworld')#world覆盖了hello
>>* .>>>world
>>* 水平制表符:\t   (它会把字符串4个4个封装)
>>* h e l l/ o   /w o r l/d
>* 退格:\b
>>* 比如:
>>* print('hello\bworld')#\b退一格，把o退没了
>>* .>>>hellworld

# 03
>* 变量
>>* 变量是内存中带标记的盒子.
>>* 变量可以被重新复值.
>>>* 比如:a=fk
>>>* print(a)
>>>* .>>>fk
>>>* a=nb
>>>* print(a)
>>>* .>>>nb

# 04
## 04.1
>* 数据类型
>* 使用type查看
>>* 比如:fk=80
>>* print(type(fk))
>>* .>>>int
>* 常用典数据类型
>>* 整数>int>1
>>>* 可以表示所有整数，和2 10 16 8 10 进制
>>* 浮点>float>3.1415926
>>>* 浮点数，整数和小数部分组成
>>>* 直接使用浮点数计算会出BUG
>>>>* 比如:
>>>>* print(1.1+2.2)
>>>>* .>>>3.3000000000000003
>>>* 使用decimal模块解决
>>>>* 比如:
>>>>* from decimal import decimal
>>>>* print(decimal(1.1)+decimal(2.2))
>>>>* .>>>3.3
>>* 布尔>bool>true/fales
>>>* 用来表示真和假
>>>* True真,False假
>>>* 也可以用整数表示
>>>>* True>1
>>>>* False>0
>>>* 字符串>str>'py牛鼻'
>>>>* 字符串有别成为不可变的字符序列
>>>>* 可以使用'单引号'"双引号"等来定义
>>>>* 单,双引号定义的字符串必须在一行
>>>>>* 比如:
>>>>>* print('001,002')
>>>>>* print("001,002")
>>>>>* .>>>
>>>>>* 001,002
>>>>>* 001,002
>>>>* 三引号定义的字符串可以在连续的多行
>>>>>* 比如:
>>>>>* print("""001
>>>>>* 002""")
>>>>>* .>>>
>>>>>* 001
>>>>>* 002

## 04.2
>* 数据类型转换
>>* 将不同类型的数据拼接在一起
>>* 转换方法
>>>* 使用算机数据类型的英文名+(需要转换的数据)
>>>>* 比如:f1='5'
>>>>* f2=3
>>>>* print(int(f1)+f2)#把f1的字符串转换成整数再加上f2

# 05
>* 输入函数 input()
>>* 使用方法
>>* 变量名+input+(+问题)
>>>* 比如:
>>>* fk=input('你想吃什么')
>>>* print(fk)
>>>* .>>>你想吃什么
>>>* <<<辣子加馍
>>>* .>>>辣子加馍

# 6
## 06.1
>* python中的运算符
>>* .+ 加
>>* .- 减
>>* .* 乘
>>* / 除
>>* // 真除
>>>* 比如:print(11//2)
>>>* .>>>5
>>* 符号不同时向下取整
>>>* 比如:
>>>* print(9// 4)
>>>* .>>> 3
>>* % 取余
>>>* 比如:
>>>* print(11%2)
>>>* .>>>1
>>* .** 次方
>>>* 比如:
>>>* print(2**3)
>>>* .>>>8

## 6.2
>* 复值运算符
>>* 链式复值
>>>* 比如:
>>>* a=b=c=857
>>>* print(a)
>>>* print(b)
>>>* print(c)
>>>* .>>>857
>>>* .>>>857
>>>* .>>>857
>>* 系列解包复值
>>>* 比如:
>>>* a,b,c=1,2,3
>>>* print(a)
>>>* print(b)
>>>* print(c)
>>>* .>>>1
>>>* .>>>2
>>>* .>>>3
>>* 交换值
>>>* 比如:
>>>* a,b=1,2
>>>* a,b=b,a
>>>* print(a,b)
>>>* .>>>2,1

## 06.3
>* 比较运算符
>>* 比如:
>>* a=1
>>* b=2
>>* print(a>b)
>>* .>>>False

## 06.4
>* 布尔运算符
>>* and 只要有一个false就输出False
>>* or 只要有一个True就输出True
>>* not 取反
>>* in 查找
>>* not in 查找取反
>* 使用方法
>* pritn(比较a+运算符+比较b)

## 06.5
>* 位运算
>>* 把数据转换成二进制进行计算
>>* 位与&:相对应的数位都是1结果才会是1,否则为0
>>* 位或l:相对应的数位都是0结果才会是0,否则为1
>>* 左移运算符>>:高位溢出舍弃,低位补0
>>* 右移运算符<<:低位溢出舍弃,高位补0
 
## 06.6
>* 运算优先级
>>*0 括号 1算数运算 2位运算 3比较运算 4布尔运算 5复值
# 7
## 07.1
>* 代码的结构
>>* 1顺序结构
>>>* 代码一行一行的按顺序执行
>>>* (
>>>* 对象的布尔值
>>>* python一切的对象都有一个布尔值
>>>* 以下对应的布尔值为False
>>>* False
>>>* None
>>>* 空字符串
>>>* 空列表
>>>* 空元组
>>>* 空字典
>>>* 空集合
>>>* )
>>* 2选择结构
>>>* 明确计算机知道在什么条件下,该去做什么
>>>>* 单分支结构
>>>>* 中文:如果...就...
>>>>* 语法结构:if 条件表达式:
>>>>*   条件执行体
>>>* 双分支结构
>>>>* 中文:如果...就...不满足就...
>>>>* 语法结构:if 条件表达式:
>>>>*   条件执行体1
>>>>*   else:
>>>>*   条件执行体2
>>>* 多分支结构:语法结构:if 条件表达式1:
>>>>*   条件执行体1
>>>>*   elif 条件表达式2:
>>>>*   条件执行体2
>>>>*   elif 条件表达式n:
>>>>*   条件执行体n
>>>* 3pass
>>>* 用来占位,不让程序报错

## 07.2
>* 函数range()
>>* 用来生成一个整数序列
>>* 使用方法
>>>* 1:range(数字A)#创建一个0到数字A步长为1的整数序列
>>>* 2:range(数字B,数字A)#创建一个数字B到数字A步长为1的整数序列
>>>* 3:range(数字B,数字A,数字C)#创建一个数字B到数字A步长为数字C的整数序列
>>>>* 比如:
>>>>* fk=range(1,100,2)
>>>>* print(list(fk))#输出要输出成列表
>>>>* .>>>[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]

## 07.3
>* while循环
>>* 语法:while 条件表达式:
>>*   循环体

## 07.4
>* for循环
>>* 语法:for 变量名 in 循环体:
>>*   如果变量名位下划线那么会循环下面的代码
>>>* 比如:
>>>* for _ in range(2):
>>>* print('阿巴')
>>>* .>>>阿巴
>>>* 阿巴
## 07.5
>* 流程控制语句
>>* 1 break
>>>* 结束循环
>>* 2 continue
>>>*结束当前循环,进入下一个循环

## 07.6
>* 嵌套循环
>>* 把两个循环嵌套在一起,一个循环的循环体为另一个循环

# 8
## 08.1
>* 列表
>>* 列表内可以存储N中不同类型的元素
   
## 08.2
>* 列表到创建
>>* 1 列表需要使用中括号[]，元素之间用逗号隔开
>>* 2 创建的方法
>>>* （1）使用中括号
>>>>* 比如:
>>>>* ld=['hello','123']
>>>>* print(ld)
>>>>* .>>>['hello','123']
>>>>* （2）调用函数：list()
>>>>* 比如:
>>>>* ld=list(['hello','123'])
>>>>* print(ld)
>>>>* .>>>['hello','123']
     
## 08.3
>* 列表的特点
>>* 1 列表元素按顺序有序排列
>>* 2 索引映射唯一，一个数据
>>* 3 列表内可以放重复的数据
>>* 4 可以存储任意数据类型
## 08.4
>* 列表的索引
>>* 1 正索引:从0开始指向右
>>* 2 负索引:从 1开始指向左
>>* 3 查找函数 index()
>>>* 比如:
>>>* lb=['hello','world','hello']
>>>* print(lb,index('hello'))#输出‘hello’的信息
>>>* pritn(lb,index('hello',1,2))#在0 1之间查找‘hello’并且输出它的信息
>>>* .>>>0
>>>* .>>>2
>>* 4 获取列表中单个的元素
>>>* print(列表名,[元素的索引])
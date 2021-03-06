# 我读 《网络是怎样连接的》

> 如果就是把书上的搬过来, 不要写了

## 浏览器

### 浏览器解析 URL

假如访问一个 web 服务器, 以 https://www.github.com/liweinanone 为例:

浏览器会把该 URL 解析为 3 部分, https, www.github.com, /liweinanone, 三部分, 分别是 与 web 服务器的通信协议, web 服务器的域名, 请求文件所在目录结构的地址

### 生成 HTTP 消息

请求行: HTTP/2 get https://api.github.com/users/liweinanone (去哪, 做什么)

响应行: HTTP/2 200 OK

还有消息头, 消息体

### 查询 IP 地址

Q: IP 地址和子网掩码如何协同工作?

A: 完整的 IP 地址包括了网络号和主机号, 比如 1.2.3.4, 但是不容易区分网络号和主机号, 于是出现了子网掩码:

1.2.3.4/255.255.254.0 或者 1.2.3.4/23, 其中 23 为 1 的长度

子网掩码为 1 的部分表示网络号, 为 0 的部分表示主机号

主机号部分全 0 表示整个子网, 全 1 表示向子网所有设备上发送包, 术语为 “广播”

TODO: 什么是网络号和主机号?

浏览器调用操作系统提供的 Socket 库来向 DNS 服务器查询域名和 IP 地址. Socket 库提供了用于调用网络功能的程序

### 委托协议栈

在知道 IP 地址后, 浏览器会委托操作系统的协议栈向 Web 服务器发送请求, 按照特定的顺序调用 Socket 库中的程序组件

TODO: 什么是协议栈?

服务端和客户端通过套接字来连接数据管道

如何进行数据收发:

1. 创建套接字: `<描述符> = socket(...)`, 会返回一个描述符, 该描述符用于浏览器识别该套接字. 也会给该套接字分配一个端口号
2. 连接: `connect(<描述符>, <服务器的 IP 地址和端口号>, ...`, 该过程是委托协议栈完成的. 当协议栈进行连接操作时, 会通知服务器该套接字的端口号 (因为套接字通过端口号进行通信
3. 通信: `write(<描述符>, <get/post...>, ...`, `read(<描述符>, <接收数据内存地址>, ...)`
4. 断开连接: `close(<描述符>)`

> 越来越有意思了

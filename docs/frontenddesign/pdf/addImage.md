# addImage api
addImage是jsPDF库中的一个方法，用于将指定的图像添加到当前的PDF文档中。它接受以下参数：

+ imgData (string): 这是一个包含图像数据的base64编码的DataURL格式的字符串。这通常是通过canvas.toDataURL()方法获得的结果。

+ format (string): 图像的格式。可以是"JPEG"、"JPG"、"PNG"或"GIF"。这个值不区分大小写。

+ x (number): 图像在PDF页面上的水平坐标（x轴位置）。取值范围为 0（左侧边缘）到页面宽度之间。

+ y (number): 图像在PDF页面上的垂直坐标（y轴位置）。取值范围为0（顶部边缘）到页面高度之间。

+ width (number): 图像在PDF页面上的宽度。单位通常为点（pt）。

+ height (number): 图像在PDF页面上的高度。单位通常为点（pt）。

+ alias (string, optional): 可选参数，为图像设置一个别名。这主要用于避免在PDF中多次嵌入相同的图像，可以节省生成的PDF文件的大小。

compression (string, optional): 可选参数，用于设置压缩算法。可选值为"FAST"（默认）或"MEDIUM"或"SLOW"。注意，使用不同的压缩程度可能会影响图像质量和生成的PDF文件的大小。

一个简单的addImage示例：
```JS
pdf.addImage(imgData, 'PNG', 10, 10, 250, 250);
```
该示例将一个PNG格式的图像添加到PDF文档的(10, 10)坐标处，并将其宽度和高度设置为250点。
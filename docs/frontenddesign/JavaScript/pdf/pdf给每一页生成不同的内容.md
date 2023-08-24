# pdf页码

```JS
// 引入 jsPDF 库
import jsPDF from "jspdf";

// 创建一个 jsPDF 实例
const pdf = new jsPDF();

// 定义要插入的内容
const contents = [
  "第1页的内容",
  "第2页的内容",
  "第3页的内容"
];

// 循环遍历 contents，页数从 0 开始
for (let pageIndex = 0; pageIndex < contents.length; pageIndex++) {
  const content = contents[pageIndex];

  // 为每一页添加内容
  pdf.text(content, 20, 20);

  // 添加页码， 设置页码位置在接近页脚的地方
  pdf.text(`${pageIndex + 1}`, pdf.internal.pageSize.getWidth() / 2, pdf.internal.pageSize.getHeight() - 20);

  // 如果不是最后一页，则添加新的一页
  if (pageIndex < contents.length - 1) {
    pdf.addPage();
  }
}

// 保存生成的 PDF
pdf.save("pdf_with_page_numbers.pdf");
```
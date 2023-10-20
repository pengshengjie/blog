```jsx
import * as echarts from 'echarts';
import {  useEffect } from 'react';
import { useRef } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import './demo.css'
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};


const Demo = () => {
  const ref = useRef();
  const canvasRef = useRef();
  useEffect(() => {
    var myChart = echarts.init(ref.current);
    myChart.setOption(option)
  }, [])
  return <>
      <Button onClick={() => {
      html2canvas(canvasRef.current, {
        windowHeight: 600,
        windowWidth: 1200
      }).then(canvas => {
        const img = canvas.toDataURL();
        const doc = new jsPDF();
        doc.addImage(img, 10, 10, 100, 100);
        doc.save('chart.pdf');
      })
    }}>下载</Button>
    <div ref={canvasRef}>
    123

    <Table dataSource={dataSource} columns={columns} />;
    <div style={{width: 1200, height: 800}} ref={ref}></div>
  </div>
  123
  </>
}


export default Demo;

```
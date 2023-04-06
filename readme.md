# json2echarts

> 使用json配置文件快速生成echarts图表图片


```json 
配置格式：
{
  "width": 1000, // 宽度
  "height": 500, // 高度
  "chartConfig": { // echarts配置 assign至默认配置
    "series": [
      {
        "type": "pie",
        "radius": ["40%", "70%"],
        "itemStyle": { "borderRadius": 10, "borderColor": "#fff", "borderWidth": 2 },
        "label": { "show": true, "position": "outside", "formatter": "{@org} {@value}TB ({d}%)" }
      }
    ],
    "dataset": {
      "source": [
        ["org", "value"],
        ["管委会", 0.0496],
        ["总裁办", 26.8125],
        ["联合创新中心", 0.068],
        ["风险与存客经营中心", 4.8334],
        ["财务管理中心", 4.433],
        ["商业增长中心", 1.534]
      ]
    }
  }
}
```

### Docker 

- 打包 `docker build -f ./build/Dockerfile -t json2echarts`
- 镜像使用 `docker run -d --restart=always -p hostPort:20000 json2echarts`


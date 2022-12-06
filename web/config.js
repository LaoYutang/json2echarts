const config = {
  "width": 1000,
  "height": 500,
  "chartConfig": {
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
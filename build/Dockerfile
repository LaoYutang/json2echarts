FROM node:16

COPY ./ /data/json2echarts

RUN cd /data/json2echarts && npm i --registry https://registry.npm.taobao.org

CMD cd /data/json2echarts && node index.js
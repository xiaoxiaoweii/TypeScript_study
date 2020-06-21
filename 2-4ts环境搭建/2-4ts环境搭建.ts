// npm 安装typescript 使用tsc将ts文件转为js文件 即可正常运行
// npm 安装 ts-node  te-node ts后缀名即可运行

interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  console.log('xiaoxiaoweii ts');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

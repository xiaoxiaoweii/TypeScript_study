// npm 安装typescript 使用tsc将ts文件转为js文件 即可正常运行
// npm 安装 ts-node  te-node 2-4.ts即可运行
function tsDemo(data) {
    console.log('xiaoxiaoweii ts');
    return Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
}
tsDemo({ x: 1, y: 123 });

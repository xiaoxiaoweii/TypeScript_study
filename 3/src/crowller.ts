// ts  -> .d.ts 翻译文件  -> js
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';
import xiaoxiaoweiiAnalyzer from './xiaoxiaoweiiAnalyzer'
class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');
  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
  private async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.anylyzer.anylyze(html,this.filePath)
    this.writeFile(fileContent)
  }
  constructor(private url: string,private anylyzer: any) {
    this.initSpiderProcess();
  }
}
const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
const anylyzer = xiaoxiaoweiiAnalyzer.getInstance();
/* const anylyzer = new xiaoxiaoweiiAnalyzer(); */
new Crowller(url, anylyzer);

console.log("xiaoxiaoweii")

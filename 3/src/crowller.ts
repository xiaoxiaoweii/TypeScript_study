// ts  -> .d.ts 翻译文件  -> js
import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Course {
  title: string,
  count: number
}
interface courseResult {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}
class Crowller {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = '';
  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(descs.eq(1).text().split('：')[1], 10);
      courseInfos.push({
        title,
        count
      });
    });
    return {
      time: (new Date()).getTime(),
      data: courseInfos
    }
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  async initSpiderProcess() {
    const filePath = path.resolve(__dirname, '../data/course.json');
    const html = await this.getRawHtml()
    const courseInfo = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseInfo)
    fs.writeFileSync(filePath,JSON.stringify(fileContent));
  }
  generateJsonContent(courseInfo: courseResult) {
    const filePath = path.resolve(__dirname, '../data/course.json');
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
  }
  constructor() {
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();

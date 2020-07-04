// ts  -> .d.ts 翻译文件  -> js
import superagent from 'superagent';

class Crowller {
  private type = 'movie';
  private url = `https://${this.type}.douban.com/`;
  private rawHtml= '';
  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.rawHtml = result.text
  }
  constructor() {
    this.getRawHtml()
  }
}

const crowller = new Crowller();
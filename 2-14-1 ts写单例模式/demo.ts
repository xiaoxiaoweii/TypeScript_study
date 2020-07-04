/* demo永远只能生成一个实例  */
/* static 将方法挂在类上 并不是类的实例上 */

class Demo {
  private static instance: Demo;
  private constructor() { }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo();
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
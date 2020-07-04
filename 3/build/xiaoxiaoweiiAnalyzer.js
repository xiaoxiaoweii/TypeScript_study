"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var xiaoxiaoweiiAnalyzer = /** @class */ (function () {
    function xiaoxiaoweiiAnalyzer() {
    }
    xiaoxiaoweiiAnalyzer.getInstance = function () {
        if (!xiaoxiaoweiiAnalyzer.instance) {
            xiaoxiaoweiiAnalyzer.instance = new xiaoxiaoweiiAnalyzer();
        }
        return xiaoxiaoweiiAnalyzer.instance;
    };
    xiaoxiaoweiiAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseItems = $('.course-item');
        var courseInfos = [];
        courseItems.map(function (index, element) {
            var descs = $(element).find('.course-desc');
            var title = descs.eq(0).text();
            var count = parseInt(descs.eq(1).text().split('：')[1], 10);
            courseInfos.push({
                title: title,
                count: count,
            });
        });
        return {
            time: new Date().getTime(),
            data: courseInfos,
        };
    };
    xiaoxiaoweiiAnalyzer.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    xiaoxiaoweiiAnalyzer.prototype.anylyze = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return xiaoxiaoweiiAnalyzer;
}());
exports.default = xiaoxiaoweiiAnalyzer;

const fs = require("fs-extra");

const dir = "./cucumber_report/html";

if (fs.existsSync(dir)) {
  fs.emptyDirSync(dir);
}

fs.mkdirSync(dir);

const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonDir: "report",
  output: "report/html/cucumber_report.html",
  screenshotsDirectory: "screenshots/",
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  lauchReport: true,
  name: "project name",
  brandTitle: "smoke test",
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  81.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);

import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  maxInstances: 1,
  maxInstancesPerCapability: 1,
  waitTimeout: 40000,
  updateJob: false,
  specs: ['./test/specs/**/*.js'],
  exclude: [],

  capabilities: [
    {
      project: 'First Webdriverio Android Project',
      build: 'Webdriverio Android',
      name: 'first_test',
      deviceName: 'Samsung Galaxy S10e',
      osVersion: '9.0',
      app: process.env.BROWSERSTACK_APP_ID,
      'browserstack.debug': true,
      'browserstack.app_id': 'SampleApp'
    }
  ],
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'reports/allure-results/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        testFailureIgnore: true
      }
    ]
  ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 50000
  }
};

exports.config = {
  specs: ["./specs/**/*.spec.js"],

  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      maxInstances: 1,

      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: ["--disable-notifications"],
      },
    },
  ],

  logLevel: "info",

  bail: 0,

  baseUrl: "http://46.101.234.121",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["chromedriver", "devtools"],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  // =====
  // Hooks
  // =====

  onPrepare: function (config, capabilities) {},

  onWorkerStart: function (cid, caps, specs, args, execArgv) {},

  beforeSession: function (config, capabilities, specs) {},

  async before() {
    require("expect-webdriverio").setOptions({ wait: 5000 });
  },

  beforeCommand: function (commandName, args) {},

  beforeSuite: function (suite) {},

  beforeTest: async function (test, context) {},

  beforeHook: function (test, context) {},

  afterHook: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {},

  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {},

  afterSuite: function (suite) {},

  afterCommand: function (commandName, args, result, error) {},

  after: function (result, capabilities, specs) {},

  afterSession: async function (config, capabilities, specs) {},

  onComplete: function (exitCode, config, capabilities, results) {},

  onReload: function (oldSessionId, newSessionId) {},
};

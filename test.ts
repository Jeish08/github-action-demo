
const test = require("node:test");
const assert = require("node:assert/strict");

test("task tracker project has a valid name", () => {
    const packageData = require("./package.json");

    assert.equal(packageData.name, "github-action-demo");
});

test("task tracker has a build script", () => {
    const packageData = require("./package.json");

    assert.ok(packageData.scripts.build);
});

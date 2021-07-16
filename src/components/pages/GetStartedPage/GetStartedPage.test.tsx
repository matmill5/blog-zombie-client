import React from "react";
import renderer from "react-test-renderer";
import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import GetStartedPage from "./GetStartedPage";

// Jest
describe("GetStartedPage Tests", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  // Existence Test
  it("it exists", () => {
    const tree = renderer.create(<GetStartedPage />).toJSON();
    expect(tree).toBeTruthy();
  });

  // Snapshot Test
  // NOTE: If you've modified component, and expect a change, update snapshot with the following command: jest --updateSnapshot
  // NOTE: If you haven't intentionally modified component, and were not expecting a change, investigate why snapshot test failed (refrain from updating snapshot to accomodate unexpected change)
  it("it renders correctly", () => {
    const tree = renderer.create(<GetStartedPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Visual Regression Test
  // https://github.com/americanexpress/jest-image-snapshot
  it("it doesn't have visual regression", async () => {
    expect.extend({ toMatchImageSnapshot });
    const page = await browser.newPage();
    // Confirm that the web application is running locally, at port:3000
    await page.goto("https://localhost:3000");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

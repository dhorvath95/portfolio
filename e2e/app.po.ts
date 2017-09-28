import { browser, element, by } from 'protractor';

export class PortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('p-root h1')).getText();
  }
}
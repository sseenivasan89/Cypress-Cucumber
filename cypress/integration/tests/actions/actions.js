import { Given } from "cypress-cucumber-preprocessor/steps";
import actionsPage from '../../../pages/actions/actions';


Given('I Open Selenium Page', () => {
    actionsPage.visit();
});

Then('I Navigate to Each Header Tab', () => {
    actionsPage.headerNavigation();
});

And(`I Search {string} in  Search Box`, (keyword) => {
    actionsPage.searchWord(keyword)
})
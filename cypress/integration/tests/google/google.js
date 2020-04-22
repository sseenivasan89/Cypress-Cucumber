import { Given } from "cypress-cucumber-preprocessor/steps";
import googlePage from '../../../pages/google/google';


Given('I open Google', () => {
    googlePage.visit();
});

Then(`I see {string} in the title`, (title) => {
    googlePage.titleMacth(title);
});

And(`I Search {string}`, (keyword) => {
    googlePage.searchWord(keyword)
})
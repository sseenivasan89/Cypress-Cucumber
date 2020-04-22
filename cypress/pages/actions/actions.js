const url = 'https://www.selenium.dev/'
const download_tab = 'a.nav-item:nth-child(3)'
const projets_tab = 'a.nav-item:nth-child(4)'
const documentation_tab = 'a.nav-item:nth-child(5)'
const support_tab = 'a.nav-item:nth-child(6)' 
const search_box = '[name="search"]'

class actionsPage {
  static visit() {
    cy.visit(url);
  }

  static headerNavigation(title) {
    cy.get(download_tab).click()
    cy.wait(500)
    cy.get(projets_tab).click()
    cy.wait(500)
    cy.get(documentation_tab).click()
    cy.wait(500)
    cy.go('back')
    cy.wait(500)
    cy.get(support_tab).click()
    cy.wait(500)

  }

  static searchWord(keyword) {
    cy.get(search_box).type(keyword)
    cy.wait(500) 
  }
}

export default actionsPage;
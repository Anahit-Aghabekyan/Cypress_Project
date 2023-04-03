describe('template spec', () => {
    it('Go to WNBA Web page', () => {
    cy.visit('https://www.wnba.com/standings/#?season=2022')
    })
    it('Select 2018 Season', () => {
        cy.wait(2000)
    cy.get('#filter-season').select('2018 Season')
    })
    it('Verify number of row in the table is 12', () => {
    let numberOfTeam
    cy.get('#league > wnba-stat-table >.row > .stat-table__overflow >.table > tbody')
    .find("tr")
    .then((rows) => {
    numberOfTeam = rows.toArray().length
    expect (numberOfTeam).to.equal(12)
    });
    })
    it('Print team names in column 2', () => {
    cy.get('#league > wnba-stat-table > .row >.stat-table__overflow > .table > tbody')
    .find("tr")
    .find("th").each(($el, index, $list)=>{
    cy.log($el.text())
    })
    })
    })
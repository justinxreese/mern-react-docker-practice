/// <reference types="cypress" />

context('Files', () => {
  it('load files list', () => {
    cy.request('http://localhost:3001/api/files/').then((response) => {
      expect(response.body).to.have.property('files')
      expect(response.body.files).to.have.length(2)
    })
  })

  it('loads a single file', () => {
    cy.request('http://localhost:3001/api/files/1').then((response) => {
      expect(response.body).to.have.property('file')
      expect(response.body.file).to.have.deep.property('name', 'file1.txt')
      expect(response.body.file).to.have.deep.property('size', '1.0 KB')
    })
  })
})

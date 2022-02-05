/// <reference types="cypress" />

describe('addProjectModal.spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    // Click on the add project button to open the modal
    cy.get('[data-testid="AddProjectButton"]').click();
  });

  it('should open when the add project button is clicked', () => {
    const modal = cy.get('[data-testid="AddProjectModal"]');

    modal.should('be.visible');
  });

  it('should stay open when the add project button is clicked without a name being entered', () => {
    const modal = cy.get('[data-testid="AddProjectModal"]');

    // Click on the add button
    modal.get('[data-testid="AddProjectModalAddButton"]').click();

    modal.should('be.visible');
  });

  it('should close when the add project button is clicked with a name being entered', () => {
    const modal = cy.get('[data-testid="AddProjectModal"]');

    // Get the input and type in a name
    const input = modal.get('[data-testid="AddProjectModalNameInput"]');
    input.type('test');

    // Click on the add button
    cy.get('[data-testid="AddProjectModalAddButton"]').click();

    modal.should('not.be.visible');
  });

  it('a new project should have been created with the name "test"', () => {
    // Gets the last project nav item
    const projectNavItem = cy.get('[data-testid="ProjectNavItem"]').last();

    projectNavItem.should('have.text', 'test');
  });
});

export const _ = {};

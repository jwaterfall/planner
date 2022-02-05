/// <reference types="cypress" />

describe('sidebar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should navigate to the tag page', () => {
    // Clicks on the first tag nav item
    cy.get('[data-testid="TagNavItem"]').first().click();

    cy.url().should('include', '/tags/');
  });

  it('should navigate to the project page', () => {
    // Clicks on the first project nav item
    cy.get('[data-testid="ProjectNavItem"]').first().click();

    cy.url().should('include', '/projects/');
  });

  it('should navigate to the upcoming page', () => {
    // Clicks on the upcoming nav item
    cy.get('[data-testid="UpcomingNavItem"]').click();

    cy.url().should('include', '/upcoming');
  });

  it('should navigate to the trash page', () => {
    // Clicks on the trash nav item
    cy.get('[data-testid="TrashNavItem"]').click();

    cy.url().should('include', '/trash');
  });

  it('should navigate back to the home page', () => {
    // Clicks on the home nav item
    cy.get('[data-testid="HomeNavItem"]').click();

    cy.url().should('equal', 'http://localhost:3000/');
  });
});

export const _ = {};

import intents from "../../src/data/intents.json";

describe("AI intents manager", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should successfully loads all intents from data", () => {
    // cy.get('[data-testid="intent"]').
    cy.get('[data-testid="page-title"]').should(
      "contain",
      "AI intents manager"
    );
    cy.get('[data-testid="intent"]').should("have.length", intents.length);
  });

  it("should successfully toggle all intents", () => {
    cy.get('[data-testid="toggle-all-intents"]')
      .should("not.be.checked")
      .check({ force: true });
    cy.get('[data-testid="intent-checkbox"]').should("be.checked");

    cy.get('[data-testid="toggle-all-intents"]')
      .should("be.checked")
      .uncheck({ force: true });
    cy.get('[data-testid="intent-checkbox"]').should("not.be.checked");
  });

  it("should successfully check intent and show loading button", () => {
    const [intent] = intents;

    cy.get(`[data-testid="intent-checkbox"][name=${intent.id}]`).check({
      force: true,
    });

    cy.get('[data-testid="loading"]').should("be.visible");
    cy.get(`[data-testid="intent-checkbox"][name=${intent.id}]`).should(
      "be.checked"
    );
  });

  it("shoud load first intent expanded as default", () => {
    const [firstIntent] = intents;

    cy.get('[data-testid="intent"]')
      .first()
      .within(() => {
        return cy
          .get('[data-testid="intent-reply"]')
          .contains(firstIntent.reply.text)
          .should("exist");
      });
  });

  it.only("should be able to expand an intent on clicking the arrow", () => {
    const [, second] = intents;

    cy.get('[data-testid="intent"]')
      .eq(1)
      .within(() => {
        cy.get('[data-testid="intent-arrow"]').click();

        return cy
          .get('[data-testid="intent-reply"]')
          .contains(second.reply.text)
          .should("exist");
      });
  });
});

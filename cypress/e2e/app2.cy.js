describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Hello, Next.js!");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

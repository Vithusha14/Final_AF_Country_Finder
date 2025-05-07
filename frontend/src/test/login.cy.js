describe("Login Page Test", () => {
    it("logs in with valid credentials", () => {
      cy.visit("http://localhost:3000/login"); // ✅ Adjust port if needed
  
      cy.get('input#username').type("testuser");
      cy.get('input#password').type("password123");
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should("include", "/home"); // ✅ Make sure your app redirects
      cy.contains("My Collection").should("be.visible");
    });
  });
  
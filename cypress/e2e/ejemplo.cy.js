
describe('Mi primera prueba', () => {
    it('Visita la página principal', () => {
      cy.visit('/'); // Visita la URL base definida en la configuración
      cy.contains('Bienvenido'); // Verifica que el texto "Bienvenido" esté presente
    });
    it('Interacción con un elemento', () => {
      cy.get('#boton-login') // Selecciona el botón con id "boton-login"
        .click(); // Realiza clic
      cy.url().should('include', '/login'); // Verifica que la URL cambie a "/login"
    });
}); 
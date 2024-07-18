describe('OpenMRS', () => {
    it('LOGIN', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm');
        cy.get('input[id="username"]').type('admin');
       cy.get('input[id="password"]').type('Admin123');
        cy.get('li[id="Inpatient Ward"]').click();
        cy.get('li[id="Isolation Ward"]').click();
        cy.get('li[id="Laboratory"]').click();
        cy.get('li[id="Outpatient Clinic"]').click();
        cy.get('li[id="Pharmacy"]').click();
        cy.wait(120000);
        cy.xpath('//input[@type="submit"]').click();
        cy.wait(120000);
        cy.xpath('//a[@href="/openmrs/coreapps/findpatient/findPatient.page?app=coreapps.findPatient"]').click();

        
    });
});



describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vms-web.aamarpay.dev/authentication/login/?next=/')
    //take valid input input
    cy.get('[name="username"]').type('sohan@aamarpay.com');
    cy.get('[name="password"]').type('Sohan@01953714653');
    cy.get('.icon-eye-open.fa.fa-eye').click();
    cy.get('[name="remember_me"]').click();
    cy.get('.col-md-12.btn.btn-dark').click();
    cy.url().should('eq', 'https://vms-web.aamarpay.dev/');
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      if (err.message.includes('documnet is not defined')) {
       
        cy.log('Ignoring "documnet is not defined" error');
        return false; 
      }
    
     
      return true;
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      if (err.message.includes("Identifier 'tool_tip_container' has already been declared")) {
       
        cy.log('Ignoring "documnet is not defined" error');
        return false; 
      }
    
     
      return true;
    });
     try{
      //try to filtering valid date to execute the expected result
     cy.url().should('eq', 'https://vms-web.aamarpay.dev/');
     Cypress.on('uncaught:exception', (err, runnable) => {
      
      if (err.message.includes('tinymce is not defined')) {
       
        cy.log('Ignoring "documnet is not defined" error');
        return false; 
      }
    
     
      return true;
    });
     cy.get('[name="date"]').scrollIntoView().click({force: true});
    //const filter_date = ;
    cy.get('[name="date"]').clear();

     cy.get('[name="date"]').type('01/29/2023 - 05/29/2023');
     cy.get('.btn.btn-primary').eq(0).click({force: true});//eq for take specific element from same  multiple elements class
     //rendering filter should be greater than 0
    cy.get('.dataTables_info').should('have.length.greaterThan',0);
    
    
    cy.get('select[name="myTable_length"]').select('25', { force: true });
    cy.get('.dataTables_info').should('have.length.lessThan',25);
    //pagination for 10 
    cy.get('select[name="myTable_length"]').select('10', { force: true });
    cy.get('.dataTables_info').should('have.length.lessThan',11);
    //pagination for 50
    cy.get('select[name="myTable_length"]').select('50', { force: true });
    cy.get('.dataTables_info').should('have.length.lessThan',51);
    //search automation
    function search()
    {

    
    cy.get('input[placeholder="Search..."]').scrollIntoView().type('Plabon',{force:true});
    //loop for odd list
    for(let i =0;i<('.odd').length;i++)
    {
      
    if(cy.get('.odd').eq(i).contains('Plabon').should('exist'))
    {
      

      cy.log('search succesfull')
    }
    else{
      cy.log("search is not succesfull");
    }
  }
  //loop for even list
  for(let i =0;i<cy.get('.even').its('length');i++)
    {
      
    if(cy.get('.even').eq(i).contains('Plabon').should('exist') && cy.get('.even').eq(i).should("be.visible"))
    {
      
      cy.log('search succesfull')
    }
    else{
      cy.log("search is not succesfull");
    }
  }
}

function department()
{
  function validinfo()
  {
      //visit department panel
      cy.contains('Department').scrollIntoView().click({force:true});
      cy.get('[id="new_department_add"]').scrollIntoView().click({force:true});
   //type department name
   cy.get('[name="department_name"]').scrollIntoView().clear({force:true});
   cy.get('[name="department_name"]').type("demo name");
   cy.get('[name="department_description"]').scrollIntoView().clear({force:true});
   cy.get('[name="department_description"]').type("demo department description",{force:true});

   //submit
   cy.get('[name="save"]').scrollIntoView().click({force:true});
   //cy.get('[name="department_name"]').should("not.be.empty");
   
    cy.wait(3000);
    if(cy.contains("demo name").scrollIntoView().should("be.visible"))
    {
      cy.contains('tr', 'demo name')
  .find('.m-2.btn.btn-danger.btn-sm')
  .click({force:true});
    if(cy.get(".swal2-popup.swal2-modal.swal2-show").scrollIntoView().should("be.visible"))
    {
      cy.get('.swal2-confirm.btn.btn-primary').scrollIntoView().click({force:true});
      cy.log("pass");
      
    }
    else{
      cy.log("mission failed");
    }
    }
   

   
    
   
  }




  function invalidinfo()
  {
  //visit department panel
   cy.contains('Department').scrollIntoView().click({force:true});
   cy.get('[id="new_department_add"]').scrollIntoView().click({force:true});
   //type department name
   cy.get('[name="department_name"]').type("1",{force:true});
   cy.get('[name="department_description"]').type("demo department description",{force:true});

   //submit
   cy.contains('Add Department').scrollIntoView().click({force:true});
   //cy.get('[name="department_name"]').should("not.be.empty");

  }
  invalidinfo()
  validinfo()
}




function detalsButton()
{
  //visitor details 
  //cy.log("upside loop");
  cy.log("length:",cy.get('.even').its('length'));

  cy.get('.button-icon').its('length').then((length) => {
    // Use the length value in your loop or assertions
    for (let i = 0; i < length; i++) {
      // Perform actions on each element
      cy.get('.button-icon').eq(i).scrollIntoView().click({force:true});
     
     if( cy.get('.swal2-popup.swal2-toast.swal2-show')
     .scrollIntoView()
     .should('be.visible')
   )

  {
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      if (err.message.includes('Swal.getToast is not a function')) {
       
        
        return false; 
      }
    
     
      return true;
    });
    
    cy.wait(500);
    cy.get('.swal2-close').click({force:true});
    
  }
  else{
    cy.log('details button not working');
  }
    }
  });
  



 
  
}
function Changepage()
{
  //automation for check page
  cy.get('input[placeholder="Search..."]').scrollIntoView().clear({force:true});
  cy.get('select[name="myTable_length"]').scrollIntoView().select('10', { force: true });
  cy.wait(2000); // Wait for 2000 milliseconds (5 seconds)

  
  
  
  function recursiveFunction(parameter) {
    // Base case: define the condition for termination
    if (parameter === 0) {
      // Termination condition reached
      return;
    }
  
    // Perform some actions or assertions
    cy.get('.paginate_button.next').scrollIntoView().click({force:true}); // Example action
    cy.wait(1000)
  
    // Recursive call with updated parameter
    recursiveFunction(parameter - 1);
  }
  
  // Call the recursive function with an initial parameter
  recursiveFunction(10);

}






function addNewVisitor()
{
  
  cy.contains('Add New Visitor').scrollIntoView().click({force:true});
  cy.on('uncaught:exception', (err) => {
    // Check if the error message matches the one you want to ignore
    if (err.message.includes("Cannot read properties of null (reading 'style')")) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message contains "Cannot read properties of null"
    if (err.message.includes("Cannot read properties of null")) {
      // Ignore the error
      return false;
    }
  });
  
  //wrong input data check with automation
  cy.get('[name="visitor_name"]').scrollIntoView().type('demo',{force:true});
  cy.get('[name="visitor_address"]').scrollIntoView().type('demo Adress',{force:true});
  cy.get('.form-select').eq(0).scrollIntoView().select('BD',{force:true});
  cy.get('[name="visitor_phone_number_1"]').scrollIntoView().type('1953714653',{force:true});
  cy.get('[name="visitor_email"]').scrollIntoView().type("shsohan47@.com",{force:true});
  cy.get('[name="visitor_organization"]').scrollIntoView().type("demo organization",{force:true});
  cy.get('[name="to_which_department"]').scrollIntoView().select("5",{force:true});
  
  cy.get('[name="to_employee"]').scrollIntoView().select("3",{force:true});
  cy.get('[name="visitor_purpose"]').scrollIntoView().select("7",{force:true});
  cy.get(".btn.btn-success.btn-sm").scrollIntoView().click({force:true});
  cy.wait(2000);
  if(cy.get('.error-card').should('be.visible'))
  {
    cy.get('.swal2-close').click();
    //clear all field
    
    cy.get('[name="visitor_name"]').scrollIntoView().clear({force:true});
  cy.get('[name="visitor_address"]').scrollIntoView().clear({force:true});
  cy.get('[name="visitor_phone_number_1"]').scrollIntoView().clear({force:true});
  cy.get('[name="visitor_email"]').scrollIntoView().clear({force:true});
  cy.get('[name="visitor_organization"]').scrollIntoView().clear({force:true});


    //rewrite all field

    cy.get('[name="visitor_name"]').scrollIntoView().type('demo',{force:true});
  cy.get('[name="visitor_address"]').scrollIntoView().type('demo Adress',{force:true});
  cy.get('.form-select').eq(0).scrollIntoView().select('BD',{force:true});
  cy.get('[name="visitor_phone_number_1"]').scrollIntoView().type('1953714653',{force:true});
  cy.get('[name="visitor_email"]').scrollIntoView().type("shsohan47@gmail.com",{force:true});
  cy.get('[name="visitor_organization"]').scrollIntoView().type("demo organization",{force:true});
  cy.get('[name="to_which_department"]').scrollIntoView().select("5",{force:true});
  
  cy.get('[name="to_employee"]').scrollIntoView().select("3",{force:true});
  cy.get('[name="visitor_purpose"]').scrollIntoView().select("7",{force:true});
  cy.get(".btn.btn-success.btn-sm").scrollIntoView().click({force:true});
  cy.wait(2000);
  if(cy.get('.swal2-title').should('be.visible'))
  {
    cy.get('.swal2-confirm.swal2-styled').scrollIntoView().click({
      force:true
    });
    
    
    

    cy.log("Add new visitor test succesful");
    return 
  }
  else{
    cy.log("Add new visitor test unsuccesful");
  }
  }
}
function teamMember()
{
  cy.on('uncaught:exception', (err) => {
    // Check if the error message matches the one you want to ignore
    if (err.message.includes("SyntaxError: Unexpected end of JSON input")) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
  });
  function validinfo()
  {
    
    cy.contains('Team Member').scrollIntoView().click({force:true});
    cy.get('[id="new_team_member_add"]').scrollIntoView().click({force:true});
    //clear input
    cy.get('[name="employee_name"]').scrollIntoView().clear({force:true});
    //cy.get('[name="department"]').select("10").scrollIntoView().clear({force:true});
    cy.get('[name="employee_email"]').scrollIntoView().clear({force:true});


    //type valid input

    cy.get('[name="employee_name"]').type("demo employee name",{force:true});
    cy.get('[name="department"]').eq(1).select("10")
    //invalid email
    cy.get('[name="employee_email"]').scrollIntoView().type("shsohan@aamarpay.com")
 
 
    //submit
    cy.get('.btn.btn-success.btn-sm').scrollIntoView().click();

   
   
   //cy.get('[name="department_name"]').should("not.be.empty");
   
    cy.wait(3000);
    if(cy.contains("demo employee name").scrollIntoView().should("be.visible"))
    {
      cy.contains('tr', 'demo employee name')
  .find('.m-2.btn.btn-danger.btn-sm')
  .click({force:true});
    if(cy.get(".swal2-popup.swal2-modal.swal2-show").scrollIntoView().should("be.visible"))
    {
      cy.get('.swal2-confirm.btn.btn-primary').scrollIntoView().click({force:true});
      cy.log("pass");
      
    }
    else{
      cy.log("mission failed");
    }
    }
     
  }

  validinfo()
}

//reason automation
function reason()
{
  cy.contains("Reason").scrollIntoView().click({force:true});
  cy.on('uncaught:exception', (err) => {
    // Check if the error message matches the one you want to ignore
    if (err.message.includes("Unexpected end of JSON input")) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
  });
  cy.get('select[name="reason_table_length"]').select('25', { force: true });
    cy.get('.dataTables_info').should('have.length.lessThan',25);
    //pagination for 10 
    cy.get('select[name="reason_table_length"]').select('10', { force: true });
    cy.get('.dataTables_info').should('have.length.lessThan',11);
    //pagination for 50
    cy.get('select[name="reason_table_length"]').select('50', { force: true });
    cy.get('.dataTables_info').should('have.length.lessThan',51);


    //search automation

    cy.get('input[placeholder="Search..."]').scrollIntoView().type('Banking Service',{force:true});
    //loop for odd list
    
    
      
    if(cy.get('.odd').eq(0).contains('Banking Service').should('exist') && cy.get('.odd').eq(0).should("be.visible"))
    {
      

      cy.log('search succesfull');
      
    }
    else{
      cy.log("search is not succesfull");
    }
  
  
  


  cy.get(".btn.btn-primary.btn-sm").scrollIntoView().click({force:true});
  cy.get('[name="purpose_name"]').type("demo reason",{force:true});
  cy.get(".btn.btn-success.btn-sm ").scrollIntoView().click({force:true});
  if(cy.contains("demo reason").scrollIntoView().should("be.visible"))
    {
      cy.contains('tr', 'demo reason')
  .find('.btn.btn-danger.btn-sm')
  .click({force:true});
    if(cy.get(".swal2-popup.swal2-modal.swal2-show").scrollIntoView().should("be.visible"))
    {
      cy.get('.swal2-confirm.btn.btn-primary').scrollIntoView().click({force:true}); 
      cy.log("pass");
      
    }
    else{
      cy.log("mission failed");
    }
    }

}





 search();
 //detalsButton();
 //Changepage();
 addNewVisitor();
 department();
 teamMember();
reason();



}
  catch(error){
    console.error('ERROR:',error);
    throw error;
  }

    
    
  })

})

  
 

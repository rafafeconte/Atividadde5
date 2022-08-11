import { faker } from '@faker-js/faker/locale/pt_BR';

export default {

    form: function() {
      var company = faker.company.companyName()
      var street = faker.address.street() 
      var number = faker.address.buildingNumber()
      var state = faker.address.state()
      var phone = faker.phone.phoneNumber()
      var thanks = 'Thank you for your purchase!'
      var loggedIn = 'Welcome, Nilay Conte!'
      
      var dados = {
          companyName: company,
          streetName: street,
          numberBuilding: number,
          stateAdress: state,
          phoneNumber: phone,
          thankYou: thanks,
          logged: loggedIn
          
      }
      return dados
    }
}
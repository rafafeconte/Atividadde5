import { faker } from '@faker-js/faker/locale/pt_BR';

export default {

    form: function() {
      var company = faker.company.companyName()
      var street = faker.address.street() 
      var number = faker.address.buildingNumber()
      var state = faker.address.state()
      var phone = faker.phone.phoneNumber()
      
      var dados = {
          companyName: company,
          streetName: street,
          numberBuilding: number,
          stateAdress: state,
          phoneNumber: phone
          
      }
      return dados
    }
}
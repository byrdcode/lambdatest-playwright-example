//@ts-check
import { faker } from "@faker-js/faker";

export function createRandomUser(){
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),  
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
    }

}
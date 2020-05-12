const faker = require('faker')
faker.seed(50)

export const words1 = faker.lorem.words(1)
export const words2 = faker.lorem.words(2)
export const words3 = faker.lorem.words(3)
export const words4 = faker.lorem.words(4)
export const words5 = faker.lorem.words(5)
export const words6 = faker.lorem.words(6)
export const words7 = faker.lorem.words(7)
export const words8 = faker.lorem.words(8)
export const words9 = faker.lorem.words(9)
export const sentences2 = faker.lorem.sentences(2)
export const sentences3 = faker.lorem.sentences(3)
export const sentences4 = faker.lorem.sentences(4)
export const sentences5 = faker.lorem.sentences(5)
export const sentences15 = faker.lorem.sentences(15)

export function uuid() {
  faker.random.uuid()
}

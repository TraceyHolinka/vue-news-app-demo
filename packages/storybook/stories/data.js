import * as faker from './faker'
import Image from '../assets/nature3.jpg'
import Avatar from '../assets/avatar.png'

export const article = {
    author: {
        id: 0,
        name: 'Faker Author'
    },
    id: 0,
    imageUrl: Image,
    postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
    summary:  faker.sentences10,
    title: faker.words6,
    body: `<h2>${faker.words9}</h2><p>${faker.sentences5}</p><p>${faker.sentences15}</p><h3>${faker.words9}</h3><p>${faker.sentences5}</p><p>${faker.sentences15}</p><p>${faker.sentences10}</p>`
}

export const articles = [1, 2, 3 ].map(x => ({ ...article, id: x }))

export const author = {
    name: 'Faker Author',
    avatarUrl: Avatar,
    bio: faker.sentences15,
    articles: [1, 2].map(x => ({ ...article, id: x }))
}

export const authors= [1, 2, 3 ].map(x => ({ ...author, id: x }))


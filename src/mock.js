export default async ({ sequelize }) => {
    await sequelize.models.User.bulkCreate([
        {
            username: 'ali',
            password: '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
            email: 'ali@gmail.com',
            credit_card: '4916994267175171',
            address: "Tashkent",
            liked_books: [],
            isAdmin: true
        },
        {
            username: 'nosir',
            password: '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
            email: 'nosir@gmail.com',
            credit_card: '4916999740524333',
            address: "Khorezm",
            liked_books: [],
        },
        {
            username: 'halil',
            password: '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
            email: 'halil@gmail.com',
            credit_card: '4916645416778600',
            address: "Jizzakh",
            liked_books: [],
        }
    ])

    await sequelize.models.Book.bulkCreate([
        {
            category: 'fantasy',
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            image: 'rings.jpg',
            price: '100$',
            electron: true,
            audio: false,
        },
        {
            category: 'self-help',
            title: 'The Book Thief (Hardcover)',
            author: 'Markus Zusak',
            image: 'thief.jpg',
            price: '70$',
            electron: true,
            audio: true,
        },
        {
            category: 'detective',
            title: 'The Shining',
            author: 'Stephen King',
            image: 'theshining.jpg',
            price: '50$',
            electron: false,
            audio: true,
        }
    ])

    await sequelize.models.Store.bulkCreate([
        {
            user_id: 1,
            book_id: 2,
            quantity: 3,
        },
        {
            user_id: 2,
            book_id: 3,
            quantity: 2,
        },
        {
            user_id: 3,
            book_id: 1,
            quantity: 1,
        }
    ]);
}
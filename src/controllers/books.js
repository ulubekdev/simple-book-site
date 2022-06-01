import { Op } from 'sequelize';

const getBooks = async (req, res) => {
    let books = await req.models.Book.findAll();
    res.send({
        status: 200,
        message: 'Books fetched successfully',
        data: books
    });
};

const getBooksBySearch = async (req, res) => {
    const books = await req.models.Book.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.like]: `%${req.query.title}%` } },
                { author: { [Op.like]: `%${req.query.author}%` } },
                { category: { [Op.like]: `%${req.query.category}%` } },
                { price: { [Op.like]: `%${req.query.price}%` } }
            ]
        }
    });

    res.send({
        status: 200,
        message: 'Books fetched successfully',
        data: books
    });
};


const getElectronBooks = async (req, res) => {
    const books = await req.models.Book.findAll({
        where: {
            electron: true
        }
    });

    res.send({
        status: 200,
        message: 'Books fetched successfully',
        data: books
    });
};

const getAudioBooks = async (req, res) => {
    const books = await req.models.Book.findAll({
        where: {
            audio: true
        }
    });

    res.send({
        status: 200,
        message: 'Books fetched successfully',
        data: books
    });
};

const addBook = async (req, res) => {
    const isAdmin = await req.models.User.findOne({
        where: {
            isAdmin: true,
        }
    });

    if (!isAdmin) {
        res.send({
            status: 401,
            message: 'You are not authorized to add a book',
            data: null
        });
    }

    const book = await req.models.Book.create({
        category: req.body.category,
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        price: req.body.price,
        electron: req.body.electron,
        audio: req.body.audio,
    });

    res.send({
        status: 200,
        message: 'Book added successfully',
        data: book
    });
};

const updateBook = async (req, res) => {
    const isAdmin = await req.models.User.findOne({
        where: {
            isAdmin: true,
        }
    });

    if (!isAdmin) {
        res.send({
            status: 401,
            message: 'You are not authorized to add a book',
            data: null
        });
    }

    const book = await req.models.Book.update({
        category: req.body.category,
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        price: req.body.price,
        electron: req.body.electron,
        audio: req.body.audio,
    }, {
        where: {
            book_id: req.params.book_id
        }
    });

    res.send({
        status: 200,
        message: 'Book updated successfully',
        data: book
    });
};

const deleteBook = async (req, res) => {
    const isAdmin = await req.models.User.findOne({
        where: {
            isAdmin: true,
        }
    });

    if (!isAdmin) {
        res.send({
            status: 401,
            message: 'You are not authorized to add a book',
            data: null
        });
    }

    const book = await req.models.Book.destroy({
        where: {
            book_id: req.params.book_id
        }
    }, {
        returning: true
    });

    res.send({
        status: 200,
        message: 'Book deleted successfully',
        data: book
    });
};

const likeBook = async (req, res) => {
    req.params.book_id = +req.params.book_id;
    req.models.User.findByPk(req.userId).then(user => {
        user.sequelize.query(`UPDATE users SET liked_books = array_append(liked_books, ${req.params.book_id}) WHERE user_id = ${req.userId}`)

        res.send({
            status: 200,
            message: 'Book liked successfully',
            data: user.liked_books
        });
    }).catch(err => {
        res.send({
            status: 500,
            message: 'Error liking book',
            data: err
        });
    })
};

const unlikeBook = async (req, res) => {
    req.params.book_id = +req.params.book_id;
    req.models.User.findByPk(req.userId).then(user => {
        user.sequelize.query(`UPDATE users SET liked_books = array_remove(liked_books, ${req.params.book_id}) WHERE user_id = ${req.userId}`)

        res.send({
            status: 200,
            message: 'Book unliked successfully',
            data: user.liked_books
        });
    }).catch(err => {
        res.send({
            status: 500,
            message: 'Error unliking book',
            data: err
        });
    });

};

export default {
    getBooks,
    getElectronBooks,
    getAudioBooks,
    getBooksBySearch,

    addBook,
    updateBook,
    deleteBook,
    likeBook,
    unlikeBook
}
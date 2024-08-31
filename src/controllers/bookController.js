const { Book } = require('../models');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Kitaplar getirilemedi.' });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Kitap bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Kitap getirilemedi.' });
    }
};

exports.createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Kitap oluşturulamadı.' });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Book.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            const updatedBook = await Book.findByPk(id);
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ error: 'Kitap bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Kitap güncellenemedi.' });
    }
};
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Book.destroy({
            where: { id: id }
        });

        if (deleted) {
            res.status(200).json({ message: 'Kitap başarıyla silindi.' });
        } else {
            res.status(404).json({ error: 'Kitap bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Kitap silinemedi.' });
    }
};

const { Borrowing, User, Book } = require('../models');
const { Op } = require('sequelize');


exports.borrowBook = async (req, res) => {
    const { userId, bookId } = req.params;

    try {
        // Kullanıcıyı ve kitabı kontrol et
        const user = await User.findByPk(userId);
        const book = await Book.findByPk(bookId);

        if (!user || !book) {
            return res.status(404).json({ error: 'Kullanıcı veya kitap bulunamadı.' });
        }

        // Kitap zaten ödünç alınmış mı kontrol et
        const existingBorrowing = await Borrowing.findOne({
            where: { UserId: userId, BookId: bookId, returnDate: null }
        });

        if (existingBorrowing) {
            return res.status(400).json({ error: 'Bu kitap zaten ödünç alınmış.' });
        }

        // Kitabı ödünç al
        await Borrowing.create({ UserId: userId, BookId: bookId });
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).json({ error: 'Kitap ödünç alınamadı.' });
    }
};


exports.returnBook = async (req, res) => {
    const { userId, bookId } = req.params;
    const { score } = req.body;

    try {
        // Kullanıcının kitabı ödünç alıp almadığını kontrol et
        const borrowing = await Borrowing.findOne({
            where: { UserId: userId, BookId: bookId, returnDate: null }
        });

        if (!borrowing) {
            return res.status(404).json({ error: 'Ödünç alma kaydı bulunamadı.' });
        }

        // Kitabı iade et
        borrowing.returnDate = new Date();
        borrowing.userScore = score;
        await borrowing.save();

        // Kitabın puanını güncelle
        const book = await Book.findByPk(bookId);
        const allScores = await Borrowing.findAll({
            where: {
                BookId: bookId,
                userScore: {
                    [Op.not]: null
                }
            }
        });
        const totalScore = allScores.reduce((sum, borrow) => sum + borrow.userScore, 0);
        book.score = totalScore / allScores.length;
        await book.save();

        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).json({ error: 'Kitap iade edilemedi.' });
    }
};
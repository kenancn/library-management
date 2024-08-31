const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    res.status(500).json({
        error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    });
};

module.exports = errorHandler;

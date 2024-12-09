const { Comment, User, News, Education } = require('../../associations');

// **Create Comment**
const createComment = async (req, res) => {
    const { message, news_id, education_id, donation_id, pengaduan_id } = req.body;
    const userId = req.userId; // Mendapatkan ID pengguna dari token atau session

    try {
        // Validasi: Pastikan komentar hanya terkait salah satu entitas (News atau Education)
        if (news_id && education_id && donation_id && pengaduan_id) {
            return res.status(400).json({ message: 'A comment can only be associated with either News or Education, not both.' });
        }

        if (!news_id && !education_id && !donation_id && !pengaduan_id) {
            return res.status(400).json({ message: 'A comment must be associated with either News or Education.' });
        }

        // Buat komentar
        const newComment = await Comment.create({
            message,
            pengaduan_id: pengaduan_id || null,
            donation_id: donation_id || null,
            news_id: news_id || null,
            education_id: education_id || null,
            createdBy: userId,
        });

        res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get Comments (Optional Filtering)**
const getComments = async (req, res) => {
    const { news_id, education_id } = req.query;

    try {
        // Filter komentar berdasarkan berita atau edukasi
        const whereClause = {};
        if (news_id) whereClause.news_id = news_id;
        if (education_id) whereClause.education_id = education_id;

        const comments = await Comment.findAll({
            where: whereClause,
            include: [
                {
                    model: User,
                    as: 'creator',
                    attributes: ['id', 'name', 'email', 'image_path'],
                },
                {
                    model: News,
                    as: 'news',
                    attributes: ['id', 'title'],
                },
                {
                    model: Education,
                    as: 'education',
                    attributes: ['id', 'title'],
                },
            ],
            attributes: ['id', 'title', 'message', 'createdAt'],
        });

        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get Comment by ID**
const getCommentById = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'creator',
                    attributes: ['id', 'name', 'email', 'image_path'],
                },
                {
                    model: News,
                    as: 'news',
                    attributes: ['id', 'title'],
                },
                {
                    model: Education,
                    as: 'education',
                    attributes: ['id', 'title'],
                },
            ],
            attributes: ['id', 'title', 'message', 'createdAt'],
        });

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({ comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Update Comment**
const updateComment = async (req, res) => {
    const { id } = req.params;
    const { title, message } = req.body;

    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        comment.title = title || comment.title;
        comment.message = message || comment.message;

        await comment.save();
        res.status(200).json({ message: 'Comment updated successfully', comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Delete Comment**
const deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        await comment.destroy();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment,
};

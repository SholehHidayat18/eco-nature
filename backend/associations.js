const User = require('./models/userModel');
const Activity = require('./models/activityModel');
const Answer = require('./models/answerModel');
const News = require('./models/newsModel');
const Education = require('./models/edukasiModel');
const Comment = require('./models/commentModel');
const Notification = require('./models/notifModel');
const Pengaduan = require('./models/pengaduanModel');
const Relawan = require('./models/relawanModel');
const Bank = require('./models/bankModel');
const Donation = require('./models/donationModel');
const Payment = require('./models/paymentModel');

Donation.hasMany(Payment, { foreignKey: 'donation_id', as: 'payments' });
Donation.hasMany(Comment, { foreignKey: 'donation_id', as: 'comments' });

Payment.belongsTo(User, { foreignKey: 'createdBy', as: 'from' });

Education.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Education.hasMany(Comment, { foreignKey: 'education_id', as: 'comments' });

Comment.belongsTo(User, { foreignKey: 'createdBy', as: 'owner' });

Relawan.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });

News.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
News.hasMany(Comment, { foreignKey: 'news_id', as: 'comments' });

Pengaduan.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Pengaduan.hasMany(Comment, { foreignKey: 'pengaduan_id', as: 'comments' });


Payment.belongsTo(User, { foreignKey: 'createdBy', as: 'owner' });
Payment.belongsTo(Bank, { foreignKey: 'bank_id', as: 'bank' });
Payment.belongsTo(Donation, { foreignKey: 'donation_id', as: 'donation' });

Bank.belongsTo(User, { foreignKey: 'createdBy', as: 'owner' });


module.exports = {
    User,
    Activity,
    Answer,
    News,
    Education,
    Comment,
    Notification,
    Pengaduan,
    Relawan,
    Bank,
    Donation,
    Payment,
}
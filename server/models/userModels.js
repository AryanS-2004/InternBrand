const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        internships: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Internship'
            }
        ],
        applied: [
            {
                internship: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Internship'
                },
                status: {
                    type: String,
                    default: 'pending'
                }
            }

        ]
    },
    {
        timestamps: true
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;


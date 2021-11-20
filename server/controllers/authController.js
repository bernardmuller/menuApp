const User = require('../models/User');

// handle errors

const handleError = (err) => {
    let errors = {
        email: '',
        password: ''
    }

    //duplicate error
    if(err.code === 11000) {
        errors.email = 'An account with that email already exists.';
        return errors;
    };

    //validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    };

    
    return errors;
};

module.exports.register = async(req, res) => {
    const { email, password } = req.body;
    
    try {
        
        const newUser = await User.create({ email, password });
        res.status(201).json(newUser)
        
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json(errors)
    }
    
}

module.exports.login = async(req, res) => {
    const { email, password } = req.body;

    res.send('new login')
};

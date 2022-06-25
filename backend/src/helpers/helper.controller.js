/**
 * 
 * This is to check user type
 */

exports.checkAuthorization = (req, res, userType) => {

    // Check if userType param is null
    if(userType == null) return res.status(500).send('`userType` parameter is required');

    // Check if userType param has valid value
    const validUserType = 
        userType === 'Admin'  ||
        userType === 'Patient' ||
        userType === 'Dentist' ||
        userType === 'Staff';

    if(!validUserType) return res.status(500).send('The value for `userType` parameter is invalid');
    
    // Check if user is not authorized
    if(!(req.user != null && req.user.users_type === userType)) 
        return res.status(401).send('Oops! You are unauthorized to view your request');
}



exports.errResponse = (res, err) => {
    return res.status(500).send({
        error: true,
        message: `${err}`
    });
}


exports.dataResponse = (res, data, withDataMsg, nullDataMsg) => {
    // If no data return empty response
    if(data.length === 0 || data == null) return res.send({
        error: false,
        data: [],
        message: nullDataMsg
    });

    // else return response with data
    return res.send({
        error: false,
        data: data,
        message: withDataMsg
    });
}

// Check if data is empty
exports.emptyDataResponse = (res, message) => {
    return res.send({
        error: false,
        message: message
    });

}
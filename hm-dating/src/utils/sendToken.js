const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
    const thirtyDaysInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
    const expirationDate = new Date(Date.now() + thirtyDaysInSeconds * 1000);
    const options = {
        expires: expirationDate,
        httpOnly: true
    }

   return res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
        message:"Login successfull"
    });
}

export {sendToken}
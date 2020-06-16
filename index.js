require('dotenv').config()


exports.hello = () => {
    console.log('hello')
    const digital = process.env.DIGITAL_SFTP_HOST
    const digi = process.env.DIGITAL_SFTP_PRIVATE_KEY
    console.log(digital, digi)
}
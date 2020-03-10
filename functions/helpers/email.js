const nodemailer = require("nodemailer")

module.exports = async (props) => {
  const { from, to, subject, html } = props
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT === 465 ? true : false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // send mail with defined transport object
  return await transporter.sendMail({
    from,
    to,
    subject,
    html,
  })
}

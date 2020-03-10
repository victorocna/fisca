require("dotenv").config();
const email = require("./helpers/email");
const basic = require("./views/email-templates/basic");

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  const { name, from, message } = JSON.parse(event.body) || {};
  try {
    await email({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New contact form submission",
      html: basic({ name, from, message })
    });
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: "Error! Email cannot be delivered"
    };
  }

  return {
    statusCode: 200,
    body: "Ok"
  };
};

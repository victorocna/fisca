require("dotenv").config();
const email = require("./helpers/email");
const register = require("./views/email-templates/register");

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  const {
    name,
    from,
    message,
    club,
    town,
    hotel,
    adulti,
    copii,
    arrival,
    departure,
    tournament
  } = JSON.parse(event.body) || {};
  try {
    await email({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New contact form submission",
      html: register({
        name,
        from,
        message,
        club,
        town,
        hotel,
        adulti,
        copii,
        arrival,
        departure,
        tournament
      })
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

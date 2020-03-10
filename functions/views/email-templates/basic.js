module.exports = (props) => {
  const { name, from, message } = props;

  return `<p><b>You have received a new contact form submission on your website</b></p>
  <p><span style="color: #666; padding-right: 4px">Name</span> <span>${name}</span></p>
  <p><span style="color: #666; padding-right: 4px">From</span> <span>${from}</span></p>
  <p><span style="color: #666; padding-right: 4px">Message</span> <span>${message}</span></p>
  <p>Have a wonderful day 👋</p>
  `
}

module.exports = props => {
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
  } = props;

  return `<p><b>Salut! Cineva tocmai s-a înscris la FISCA.</b></p>
  <p><span style="color: #666; padding-right: 4px">Nume</span> <span>${name}</span></p>
  <p><span style="color: #666; padding-right: 4px">Adresa de email</span> <span>${from}</span></p>
  <p><span style="color: #666; padding-right: 4px">Club</span> <span>${club}</span></p>
  <p><span style="color: #666; padding-right: 4px">Oraș</span> <span>${town}</span></p>
  <p><span style="color: #666; padding-right: 4px">Hotel</span> <span>${hotel}</span></p>
  <p><span style="color: #666; padding-right: 4px">Număr adulți în cameră</span> <span>${adulti}</span></p>
  <p><span style="color: #666; padding-right: 4px">Număr copii în cameră</span> <span>${copii}</span></p>
  <p><span style="color: #666; padding-right: 4px">Data sosire</span> <span>${arrival}</span></p>
  <p><span style="color: #666; padding-right: 4px">Data plecare</span> <span>${departure}</span></p>
  <p><span style="color: #666; padding-right: 4px">Turneu</span> <span>${tournament}</span></p>
  <p><span style="color: #666; padding-right: 4px">Message</span> <span>${message}</span></p>
  <p>Have a wonderful day 👋</p>
  `;
};

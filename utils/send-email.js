import sgMail from '@sendgrid/mail';
import ejs from 'ejs';

const sendEmail = async ({ name, email, message }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const template = await ejs.renderFile('views/contact-me.ejs', { name, email, message });

  const msg = {
    to: 'olasunkanmiaq@gmail.com',
    from: {
      email: 'abdulsalamquadri999@gmail.com',
      name: 'Portfolio form'
    } ,
    subject: 'Message from Portfolio',
    html: template
  };
  const info = await sgMail.send(msg);
  return info;
}

export default sendEmail
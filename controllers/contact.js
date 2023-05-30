import sendEmail from "../utils/send-email.js";

export const contact = async (req, res) => {
    const { name, email, message } = req.body;

    await sendEmail({name, email, message})

    res.status(200).json({msg: 'Message sent successfully'})
}
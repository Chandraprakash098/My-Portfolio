const nodemailer = require("nodemailer");

const sendEmailController = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or app password
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL, 
      subject: "New Contact from Portfolio",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`,
    });

    console.log("Message sent: %s", info.messageId);

    return res.status(200).send({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in sending email",
      error,
    });
  }
};

module.exports = { sendEmailController };

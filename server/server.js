const express = require("express");
const cors = require("cors");
const emailjs = require("emailjs-com");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, mobile, message } = req.body.formData;

  emailjs.send(
    "service_p47fo1u",        // Your EmailJS service ID
    "template_yputkz4",       // Your EmailJS template ID
    {
      from_name: name,
      email: email,
      mobile: mobile,
      message: message
    },
    "OX9GJjKVqVFTvuPtM"       // Your EmailJS public key
  )
  .then((result) => {
    console.log("Email sent successfully:", result.text);
    res.json({ success: true });
  })
  .catch((error) => {
    console.error("Failed to send email:", error);
    res.json({ success: false, error });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

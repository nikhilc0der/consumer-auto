import nodemailer from "nodemailer";

const sendEmail = async ({ message, subject }) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "carbuyersunion@gmail.com",
      pass: "jizpxgzwughegcyg",
    },
  });

  const emailOptions = {
    from: "carbuyersunion@gmail.com",
    to: message[14].answer.emailAddress,
    subject: subject,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body style="background-color: #121212; color: #ffffff; width:100% ; height:400px; overflow:scroll">
      <div>
        <div class="">
          <h2>${message[0].question}</h2>
          <h4>${message[0].answer}</h4>
        </div>
        <div class="">
          <h2>${message[1].question}</h2>
          <h4>${message[1].answer}</h4>
        </div>
        <div class="">
          <h2>${message[2].question}</h2>
          <h4>${message[2].answer}</h4>
        </div>
        <div class="">
          <h2>${message[3].question}</h2>
          <h4>${message[3].answer}</h4>
        </div>
        <div class="">
          <h2>${message[4].question}</h2>
          <h4>${message[4].answer}</h4>
        </div>
        <div class="">
          <h2>${message[5].question}</h2>
          <h4>${message[5].answer}</h4>
        </div>
        <div class="">
          <h2>${message[6].question}</h2>
          <h4>${message[6].answer}</h4>
        </div>
        <div class="">
          <h2>${message[7].question}</h2>
          <h4>${message[7].answer}</h4>
        </div>
        <div class="">
          <h2>${message[8].question}</h2>
          <h4>${message[8].answer}</h4>
        </div>
        <div class="">
          <h2>${message[9].question}</h2>
          <h4>Street :- ${message[9].answer.street}</h4>
          <h4>City :- ${message[9].answer.city}</h4>
          <h4>Province :- ${message[9].answer.province}</h4>
          <h4>Postal Code :- ${message[9].answer.postalCode}</h4>
          <h4>Country :- ${message[9].answer.country}</h4>
        </div>
        <div class="">
          <h2>${message[10].question}</h2>
          <h4>${message[10].answer}</h4>
        </div>
        <div class="">
          <h2>${message[11].question}</h2>
          <h4>${message[11].answer}</h4>
        </div>
        <div class="">
          <h2>${message[12].question}</h2>
          <h4>${message[12].answer}</h4>
        </div>
        <div class="">
          <h2>${message[13].question}</h2>
          <h4>Date :- ${message[13].answer.date}</h4>
          <h4>Month :- ${message[13].answer.month}</h4>
          <h4>Year :- ${message[13].answer.year}</h4>
        </div>
        <div class="">
          <h2>${message[14].question}</h2>
          <h4>First Name :- ${message[14].answer.firstName}</h4>
          <h4>Last Name :- ${message[14].answer.lastName}</h4>
          <h4>Email Address :- ${message[14].answer.emailAddress}</h4>
          <h4>Phone Number :- ${message[14].answer.phoneNumber}</h4>
        </div>
      </div>
      </div>
    </body>
    </html>
    `,
  };

  await transporter.sendMail(emailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

export { sendEmail };

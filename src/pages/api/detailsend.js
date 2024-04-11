import { sendEmail } from "../../../utils/sendMail";

export default async function handler(req, res) {
  const { DataArray } = req.body;
  try {
    await sendEmail({
      email: DataArray[14].answer.emailAddress,
      subject: "Car Buyers Union",
      message: DataArray,
    });
    return res.status(200).json("user email");
  } catch (error) {
    console.log(error);
  }
}

import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  if (!bodySchema.isValidSync(req.body)) {
    return new Response("유효하지 않은 포맷", { status: 400 });
  }

  const { from, subject, message } = req.body;
}

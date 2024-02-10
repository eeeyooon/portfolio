export type ContactModalData = {
  message: string;
  state: "success" | "error";
};

export default function ContactModal({
  contactModal: { message, state },
}: {
  contactModal: ContactModalData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "😋" : "🙁";
  return (
    <p
      className={`p-2 rounded-xl w-full text-center ${
        isSuccess ? "bg-blue-300" : "bg-red-300"
      }`}
    >{`${icon} ${message}`}</p>
  );
}

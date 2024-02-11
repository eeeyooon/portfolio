"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import ContactModal, { ContactModalData } from "./ContactModal";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [contactModal, setContactModal] = useState<ContactModalData | null>(
    null
  );

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(form) //
      .then(() => {
        setContactModal({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      }) //
      .catch(() => {
        setContactModal({
          message: "메일 전송에 실패했습니다. 다시 시도해주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setContactModal(null);
        }, 3000);
      });
  };

  return (
    <section className="w-96 px-6">
      {contactModal && <ContactModal contactModal={contactModal} />}
      <form
        onSubmit={onSubmit}
        className="w-full my-4 flex flex-col gap-2 p-4 rounded-xl bg-orange-100 mb-12"
      >
        <label htmlFor="from" className="font-semibold mt-2">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject" className="font-semibold mt-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message" className="font-semibold mt-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className="font-semibold hover:text-gray-500">Submit</button>
      </form>
    </section>
  );
}

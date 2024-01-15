"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import ContactModal, { ContactModalData } from "./ContactModal";

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

    console.log(form);

    setContactModal({ message: "성공", state: "success" });
    setTimeout(() => {
      setContactModal(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {contactModal && <ContactModal contactModal={contactModal} />}
      <form
        onSubmit={onSubmit}
        className="w-full my-4 flex flex-col gap-2 p-4 rounded-xl bg-slate-200"
      >
        <label htmlFor="from">Your Email</label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          id="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </section>
  );
}

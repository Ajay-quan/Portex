import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all fields before sending.");
      return;
    }
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess("Message prepared successfully. I will follow up by email.");
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block font-body text-sm text-white/75">
          Name
        </label>
        <input
          id="name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full rounded-[2px] border border-white/15 bg-white/[0.04] px-4 py-3 font-body text-white outline-none transition-colors placeholder:text-white/35 focus:border-white"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-body text-sm text-white/75">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-[2px] border border-white/15 bg-white/[0.04] px-4 py-3 font-body text-white outline-none transition-colors placeholder:text-white/35 focus:border-white"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-body text-sm text-white/75">
          Message
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 w-full resize-y rounded-[2px] border border-white/15 bg-white/[0.04] px-4 py-3 font-body text-white outline-none transition-colors placeholder:text-white/35 focus:border-white"
          placeholder="Tell me about your project"
        />
      </div>
      {error ? <p className="font-body text-sm text-white">{error}</p> : null}
      {success ? <p className="font-body text-sm text-white">{success}</p> : null}
      <button
        type="submit"
        className="w-full rounded-[2px] bg-[#f8f8f8] px-6 py-3 font-body text-sm font-medium text-[#171717] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        Send Message
      </button>
    </form>
  );
}

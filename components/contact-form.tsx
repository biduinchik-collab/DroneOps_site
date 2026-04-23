"use client";

import { useState } from "react";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ContactFormProps = {
  locale: Locale;
  contact: Dictionary["contact"];
  common: Dictionary["common"];
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ locale, contact, common }: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        name: formData.get("name"),
        organization: formData.get("organization"),
        email: formData.get("email"),
        context: formData.get("context"),
      }),
    });

    if (response.ok) {
      setState("success");
      form.reset();
      return;
    }

    setState("error");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-describedby="contact-form-notice">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label={contact.fields.name}
          placeholder={contact.placeholders.name}
          autoComplete="name"
          required
        />
        <Field
          id="organization"
          label={contact.fields.organization}
          placeholder={contact.placeholders.organization}
          autoComplete="organization"
          required
        />
      </div>

      <Field
        id="email"
        type="email"
        label={contact.fields.email}
        placeholder={contact.placeholders.email}
        autoComplete="email"
        required
      />

      <label className="grid gap-2" htmlFor="context">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-mist">
          {contact.fields.context}
        </span>
        <textarea
          id="context"
          name="context"
          placeholder={contact.placeholders.context}
          rows={5}
          required
          className="min-h-36 resize-y rounded-md border border-steel/25 bg-void/70 px-4 py-3 text-base font-light leading-7 text-cloud placeholder:text-steel/70"
        />
      </label>

      <p id="contact-form-notice" className="text-sm font-light leading-6 text-steel">
        {common.classifiedNotice}
      </p>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-12 items-center justify-center rounded-sm border border-signal bg-signal px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-200 hover:border-[#44B5EF] hover:bg-[#44B5EF] disabled:cursor-wait disabled:opacity-70"
      >
        {state === "submitting" ? contact.sending : contact.submit}
      </button>

      <div aria-live="polite" className="min-h-6 text-sm font-light leading-6">
        {state === "success" ? <p className="text-mist">{contact.success}</p> : null}
        {state === "error" ? (
          <p className="text-mist">
            {contact.error}{" "}
            <a className="text-signal underline-offset-4 hover:underline" href={`mailto:${common.contactEmail}`}>
              {common.contactEmail}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-mist">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="min-h-12 rounded-md border border-steel/25 bg-void/70 px-4 text-base font-light text-cloud placeholder:text-steel/70"
      />
    </label>
  );
}

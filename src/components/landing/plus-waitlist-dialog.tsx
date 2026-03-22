"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type PlusWaitlistCopy = {
  triggerLabel: string;
  title: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  cancelLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
  configErrorMessage: string;
  emailInvalid: string;
  doneLabel: string;
  closeAriaLabel: string;
};

type PlusWaitlistDialogProps = {
  locale: string;
  copy: PlusWaitlistCopy;
};

export function PlusWaitlistDialog({ locale, copy }: PlusWaitlistDialogProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<null | "invalid" | "submit" | "config">(null);

  function reset() {
    setEmail("");
    setSubmitting(false);
    setSuccess(false);
    setError(null);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setTimeout(reset, 200);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setError("invalid");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/plus-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, locale }),
      });

      if (res.status === 503) {
        setError("config");
        return;
      }
      if (!res.ok) {
        setError("submit");
        return;
      }
      setSuccess(true);
    } catch {
      setError("submit");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg" className="w-full">
          {copy.triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent
        showClose={!success}
        closeAriaLabel={copy.closeAriaLabel}
        className="sm:max-w-md"
      >
        {success ? (
          <div className="pt-1">
            <DialogHeader>
              <DialogTitle className="text-center sm:text-center">{copy.successMessage}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center pt-2">
              <Button type="button" onClick={() => handleOpenChange(false)}>
                {copy.doneLabel}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{copy.title}</DialogTitle>
              <DialogDescription>{copy.description}</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="plus-waitlist-email" className="text-sm font-medium text-zinc-800">
                  {copy.emailLabel}
                </label>
                <input
                  id="plus-waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  placeholder={copy.emailPlaceholder}
                  className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3.5 text-sm text-zinc-900 shadow-sm shadow-zinc-950/[0.03] outline-none transition-colors placeholder:text-zinc-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/25"
                />
              </div>
              {error === "invalid" ? (
                <p className="text-sm text-red-600" role="alert">
                  {copy.emailInvalid}
                </p>
              ) : null}
              {error === "submit" ? (
                <p className="text-sm text-red-600" role="alert">
                  {copy.errorMessage}
                </p>
              ) : null}
              {error === "config" ? (
                <p className="text-sm text-amber-800" role="alert">
                  {copy.configErrorMessage}
                </p>
              ) : null}
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    {copy.cancelLabel}
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={submitting}>
                  {submitting ? copy.submittingLabel : copy.submitLabel}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

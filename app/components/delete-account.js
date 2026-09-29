import Link from "next/link";
import {
  Archive,
  Check,
  CircleAlert,
  Info,
  Mail,
  Trash2,
} from "lucide-react";

const steps = [
  "Open the My Trade Pal app and sign in.",
  "Go to your Profile tab.",
  'Scroll down and tap "Delete My Account".',
  'Review the confirmation and tap "Delete My Account" again to confirm.',
];

const deletedItems = [
  "Your name and profile photo",
  "Your email address and phone number",
  "Your location details",
  "Your profile information and account login",
];

const retainedItems = [
  'Jobs, reviews and messages you shared with other users stay visible to them, but show as "Deleted User" with no name, photo or contact details.',
  "Payment and transaction records processed by Stripe, which we are legally required to keep for tax and accounting purposes, for 6 years.",
  "Limited records needed to prevent fraud or resolve disputes, kept only as long as necessary.",
];

const deletionMailto =
  "mailto:privacy@mytradepal.com?subject=Account%20deletion%20request&body=Please%20delete%20my%20My%20Trade%20Pal%20account.%0A%0AFull%20name%3A%20%0ARegistered%20email%3A%20%0ARegistered%20phone%20number%3A%20%0AAccount%20type%20(Homeowner%20or%20Tradesperson)%3A%20";

function SectionHeading({ children }) {
  return <h2 className="mb-4 text-xl font-bold text-[#000088]">{children}</h2>;
}

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24">
      <article className="mx-auto max-w-3xl px-5 py-12 text-left md:py-16">
        <header className="mb-12 border-b border-[#E2E8F0] pb-8">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
            Delete your My Trade Pal account
          </h1>
          <p className="leading-relaxed text-[#475569]">
            You can permanently delete your My Trade Pal account and personal data at any time — from inside the app, or by contacting us if you no longer have the app installed.
          </p>
          <p className="mt-4 text-sm text-[#94A3B8]">
            Applies to both homeowner and tradesperson accounts. App developer: My Trade Pal Ltd.
          </p>
        </header>

        <section className="mb-12">
          <SectionHeading>Option 1 — Delete from the app (fastest)</SectionHeading>
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm md:p-7">
            <ol className="flex flex-col gap-5">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 text-[#475569]">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#4169E1] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#EFF6FF] p-4 text-sm leading-relaxed text-[#1E40AF]">
              <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p>
                If something needs finishing first, like a job in progress or a payment still being processed, the app will list what needs to be resolved before your account can be closed.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading>Option 2 — Request deletion without the app</SectionHeading>
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm md:p-7">
            <p className="leading-relaxed text-[#475569]">
              If you&apos;ve uninstalled the app or can&apos;t sign in, email us from the email address registered to your account and we&apos;ll delete it for you.
            </p>
            <a
              href={deletionMailto}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#4169E1] px-5 py-3 font-semibold text-white transition hover:bg-[#3157c7]"
            >
              <Mail className="size-5" aria-hidden="true" />
              Email a deletion request
            </a>
            <p className="mt-4 select-text text-sm text-[#000088]">privacy@mytradepal.com</p>
            <div className="mt-6">
              <p className="font-semibold text-[#0F172A]">Please include:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#475569]">
                <li>Full name</li>
                <li>Email address registered to your account</li>
                <li>Phone number on your account</li>
                <li>Whether you&apos;re a homeowner or tradesperson</li>
              </ul>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#94A3B8]">
              To protect your account, we may ask you to verify you own it before deleting anything. We&apos;ll confirm once your account is deleted, and respond within one month as required by UK GDPR.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading>What gets deleted</SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                  <Trash2 className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-[#0F172A]">Deleted permanently</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#475569]">
                {deletedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-rose-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Archive className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-[#0F172A]">What we keep</h3>
              </div>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#475569]">
                {retainedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="mb-12 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <CircleAlert className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden="true" />
          <p>
            Deleting your account is permanent and can&apos;t be undone. If you&apos;re a tradesperson, make sure any pending payouts have been paid out to your bank account first.
          </p>
        </div>

        <section>
          <SectionHeading>Questions?</SectionHeading>
          <p className="leading-relaxed text-[#475569]">
            Contact us at{" "}
            <a className="text-[#000088] underline" href="mailto:privacy@mytradepal.com">
              privacy@mytradepal.com
            </a>
            . See our{" "}
            <Link className="text-[#000088] underline" href="/privacy-policy">
              Privacy Policy
            </Link>{" "}
            for more on how we handle your data.
          </p>
        </section>
      </article>
    </main>
  );
}

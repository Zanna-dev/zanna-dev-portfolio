import { useState } from 'react';
import { contact } from '../../data/contact';

const initialForm = { name: '', email: '', projectType: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setStatus('idle');
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 850);
  };

  const emailQuery = new URLSearchParams({
    subject: `Portfolio enquiry: ${form.projectType}`,
    body: `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\nProject details:\n${form.message}`,
  });
  const emailDraft = `mailto:${contact.email}?${emailQuery.toString()}`;

  if (status === 'success') return <div className="form-success" role="status" aria-live="polite"><span aria-hidden="true">✓</span><h3>Thank you, {form.name}.</h3><p>Your project brief is ready. Open the prepared email to send it directly to Noro.</p><a className="button button-primary" href={emailDraft}>Open email draft <span aria-hidden="true">↗</span></a><button type="button" className="text-link" onClick={() => setStatus('idle')}>Edit my details</button></div>;

  return <form className="contact-form" onSubmit={submitForm} noValidate>
    <div className="form-grid">
      <label><span>Name</span><input name="name" value={form.name} onChange={updateField} autoComplete="name" required placeholder="Your name" /></label>
      <label><span>Email</span><input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required placeholder="you@example.com" /></label>
      <label className="form-full"><span>Project type</span><select name="projectType" value={form.projectType} onChange={updateField} required><option value="" disabled>Select an option</option><option>Business Website</option><option>Web Application</option><option>Portfolio / Personal Website</option><option>E-commerce Website</option><option>Other</option></select></label>
      <label className="form-full"><span>Message / project details</span><textarea name="message" value={form.message} onChange={updateField} required rows="5" placeholder="Tell me a little about the product, audience, and what you need help with." /></label>
    </div>
    <button className="button button-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Preparing brief…' : <>Start a project <span aria-hidden="true">↗</span></>}</button>
  </form>;
}

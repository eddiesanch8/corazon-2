export default function ContactPage() {
  return (
    <>
      <section className="contact">
        <h2 className="contact__header">Contact Information:</h2>
        <div className="contact-card">
          <form className="contact__form" id="form">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First Name:"
              data-input-name=""
            />
            <p className="error" data-error-msg="" />
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email:"
              data-input-email=""
            />
            <p className="error" data-error-msg="" />
            <label htmlFor="phone" className="form__label">
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone Number:"
              data-input-phone=""
            />
            <p className="error" data-error-msg="" />
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Send a message!"
              data-input-message=""
            />
            <p className="error" data-error-msg="" />
            <button type="submit" className="submit-btn" data-submit-btn="">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
      <section data-user-message="" />
    </>
  );
}

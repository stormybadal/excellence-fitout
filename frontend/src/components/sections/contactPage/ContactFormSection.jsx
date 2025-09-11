import LeftContactForm from "./LeftContactForm";
import RightContent from "./RightContent";

function ContactFormSection() {
  return (
    <section
      className="flex min-h-screen items-center justify-center px-6"
      style={{ backgroundColor: "#FBF4ED" }}
    >
      <div className="grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left: Contact Form */}
        <div>
          <LeftContactForm />
        </div>

        {/* Right: Static Info */}
        <RightContent />
      </div>
    </section>
  );
}

export default ContactFormSection;

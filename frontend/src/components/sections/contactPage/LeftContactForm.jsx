import { useMutation } from "@tanstack/react-query";
import { submitContactForm } from "../../../api/contact.api";
import { contactFormFields } from "../../../forms/contact.form";
import FormsLayout from "../../shared/FormLayout";

function LeftContactForm() {
  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      alert("Message sent!");
    },
    onError: (err) => {
      alert(err.message || "Failed to send message");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    mutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-6">
      <div className="w-full max-w-2xl space-y-6 rounded-xl bg-white p-8 shadow-2xl">
        {/* Section Heading */}
        <div className="space-y-3">
          <h2
            className="inline-block rounded-full px-6 py-2 text-sm font-semibold text-white shadow-md"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,114,2,1) 0%, rgba(253,92,29,1) 43%, rgba(235,19,84,1) 100%)",
            }}
          >
            Send Message
          </h2>

          <h3 className="text-3xl leading-snug font-bold text-gray-800">
            Let’s start your <br />
            <span className="text-orange-500">Dream project</span>
          </h3>

          <p className="max-w-md text-gray-600">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <FormsLayout
          fields={contactFormFields}
          onSubmit={handleSubmit}
          submitLabel={mutation.isPending ? "Submitting..." : "Submit"}
          disabled={mutation.isPending}
        />
      </div>
    </div>
  );
}

export default LeftContactForm;

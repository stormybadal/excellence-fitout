// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Icons
import { LuSend } from "react-icons/lu";

const FormsLayout = ({ fields, onSubmit, submitLabel = "Submit", disabled }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    onSubmit(values);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows={field.rows || 4}
            />
          ) : field.type === "dropdown" ? (
            <select
              name={field.name}
              required={field.required}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue=""
            >
              <option value="" disabled>
                {field.placeholder || "Select an option"}
              </option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className={`flex w-full items-center justify-center gap-2 rounded-md px-4 py-4 font-semibold text-white transition ${
          disabled ? "cursor-not-allowed bg-gray-500" : "hover:opacity-90"
        }`}
        style={{
          background: disabled
            ? "#6B7280" // fallback gray for disabled
            : "linear-gradient(90deg, rgba(250,114,2,1) 0%, rgba(253,92,29,1) 43%, rgba(235,19,84,1) 100%)",
        }}
        disabled={disabled}
      >
        <LuSend className="text-lg" />
        <span>{submitLabel}</span>
      </button>
    </motion.form>
  );
};

export default FormsLayout;

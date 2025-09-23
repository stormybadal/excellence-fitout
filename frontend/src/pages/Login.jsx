"use client";

import { useMutation } from "@tanstack/react-query";
import { loginExistedUser } from "../api/auth.api";
import FormsLayout from "../components/shared/FormLayout";
import { contactFormFields } from "../forms/login.form";

export default function Login() {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginExistedUser,
    onSuccess: (data) => {
      // Save session data
      sessionStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/dashboard";
    },
  });

  const handleLogin = (values) => {
    mutate(values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>

        <FormsLayout
          fields={contactFormFields}
          onSubmit={handleLogin}
          submitLabel="Login"
          disabled={isPending}
        />

        {isError && (
          <p className="mt-4 text-center text-sm text-red-500">
            {error?.message || "Login failed."}
          </p>
        )}
      </div>
    </div>
  );
}

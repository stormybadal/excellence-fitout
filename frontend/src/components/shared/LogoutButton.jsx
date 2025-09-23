"use client";

import { useMutation } from "@tanstack/react-query";
import { logoutExistedUser } from "../../api/auth.api";
import Button from "../ui/Button";

export default function LogoutButton() {
  const { mutate, isPending } = useMutation({
    mutationFn: logoutExistedUser,
    onSuccess: () => {
      sessionStorage.removeItem("user"); // remove local profile
      window.location.href = "/admin/in"; // redirect to login
    },
  });

  return (
    <Button
      onClick={() => mutate()}
      disabled={isPending}
      className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600 disabled:opacity-50"
    >
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
}

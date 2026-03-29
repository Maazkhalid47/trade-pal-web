"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function register(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const area = formData.get("area");

  const supabase = await createClient();

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.message);
    return { success: false, message: error.message };
  }
  console.log("Registering success:", data);
  const userId = data.user.id;

  await supabase.from("users").insert({
    user_key: userId,
    name: name,
    email: email,
  });

  await supabase.from("locations").insert({
    user_id: userId,
    street_address: area,
  });

  await supabase.from("user_roles").insert({
    user_id: userId,
    role: role,
  });

  return { success: true, message: "Registration successful!" };
}

"use server";

import { createClient } from "../utils/supabase/server";

export async function register(submittedData) {
  const name = submittedData.name;
  const email = submittedData.email;
  const password = submittedData.password;
  const role = submittedData.role;
  const area = submittedData.area;

  const supabase = await createClient();

  // Register supabase user
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { success: false, message: error.message };
  }

  const authUserId = data.user.id;

  // Create public.users entry
  const { data: userData, error: userError } = await supabase
    .from("users")
    .insert({
      user_key: authUserId,
      name,
      email,
    })
    .select()
    .single();

  if (userError) {
    return { success: false, message: userError.message };
  }

  const appUserId = userData.id;

  await supabase.from("locations").insert({
    user_id: appUserId,
    street: area,
  });

  const { data: roleData } = await supabase
    .from("roles")
    .select("id")
    .ilike("name", `%${role}%`)
    .single();

  await supabase.from("user_roles").insert({
    user_id: appUserId,
    role_id: roleData?.id,
  });

  return { success: true, message: "Registration successful!" };
}

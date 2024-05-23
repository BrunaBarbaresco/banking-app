"use server";

import { ID } from "appwrite";
import { account } from "../appwrite";
import { cookies } from "next/headers";

import { parseStringify } from "../utils";

export const signIn = async (email: string, password: string) => {
  //   try {
  //     const loggedUser = await account.createEmailPasswordSession(
  //       email,
  //       password
  //     );
  //     return loggedUser;
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { email, password, firstName, lastName } = userData;
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
  }
};

export async function getLoggedUser() {
  try {
    return await account.get();
  } catch (error) {
    return error;
  }
}

"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import Link from "next/link";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:g-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            alt="Logo Horizon"
            src="/icons/logo.svg"
            width={34}
            height={34}
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? "Conectar conta bancária"
              : type === "sign-in"
              ? "Entrar"
              : "Criar conta"}
            <p className="text-16 font-normal texto-gray-600">
              {user
                ? "Conecte sua conta para começar."
                : "Por favor insira suas informações."}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/*plaid link*/}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" ? (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="Nome"
                      placeholder="Primeiro nome"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Sobrenome"
                      placeholder="Último nome"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Endereço"
                    placeholder="Insira o seu endereço"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="Estado"
                      placeholder="Ex: SP"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="CEP"
                      placeholder="55555-555"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="birthDate"
                      label="Data de nascimento"
                      placeholder="DD/MM/AAAA"
                    />
                    <CustomInput
                      control={form.control}
                      name="document"
                      label="CPF"
                      placeholder="Ex: 111.222.333.44"
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="E-mail"
                placeholder="Insira o seu email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Senha"
                placeholder="Insira o sua senha"
              />
              <div className="flex flex-col gap-4 ">
                <Button className="form-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Carregando...
                    </>
                  ) : type === "sign-in" ? (
                    "Entrar"
                  ) : (
                    "Criar conta"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Ainda não possui uma conta?"
                : "Já possui uma conta?"}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/cadastro" : "/login"}
            >
              {type === "sign-in" ? "Criar." : "Entrar."}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;

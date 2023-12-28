"use client";
import { ExemploContext } from "@/components/ExemploContext";
import { Context } from "@/components/UseContext";
import { UseEffect } from "@/components/UseEffect";
import { UseReducers } from "@/components/UseReducers";

export default function Home() {
  return (
    <main>
      <UseEffect />
      <UseReducers />
      <Context />
      <ExemploContext />
    </main>
  );
}

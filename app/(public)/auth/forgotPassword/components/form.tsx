"use client";
import { cookies } from 'next/headers'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation'
import { formSchema } from '@/schemas/formSchema';

export default function FormResetPass() {

  const router = useRouter()

  const [seePass, setSeePass] = useState(true);
  const [checked, setChecked] = useState(false);

  function clickEye() {
    setSeePass(!seePass);
  }
  
  async function onSubmit(data: z.infer<typeof formSchema>) {
    alert("O seu email para recuperar sua senha foi enviado, verifique sua caixa de entrada")
    return
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    {...field}
                    className="w-96"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" variant={"primary"}>
            Password Reset
          </Button>
        </form>
      </Form>
    </div>
  );
}


"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { formSchema } from '@/schemas/formSchema';

export default function FormLogin() {

  const router = useRouter()

  const [seePass, setSeePass] = useState(true);
  const [checked, setChecked] = useState(false);

  function clickEye() {
    setSeePass(!seePass);
  }

  function clickCheck() {
    setChecked(!checked);

    if (checked == true) {
      console.log("Not Checked");
    } else {
      console.log("Checked");
    }
  }
  
  async function onSubmit(data: z.infer<typeof formSchema>) {
    await axios
      .post("http://localhost:3001/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then(async function (res) {
        const json = await res.data;
        if (res.status !== 200) throw new Error(json);
        console.log(res)
        router.push('/app/overview')
      })
      .catch(function (err) {
        console.log(err.message);
        alert("Alguma credencial sua pode está errada, verifique e tente novamente")
      });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormLabel
                  onClick={() => {
                    router.push("/forgotPassword");
                  }}
                  className="ml-[220px] text-teal-400 text-xs cursor-pointer"
                >
                  Forgot password?
                </FormLabel>
                <FormControl>
                  <div className="flex">
                    <Input
                      placeholder="************"
                      {...field}
                      type={seePass ? "password" : "string"}
                    />
                    {seePass ? (
                      <Eye
                        className="absolute ml-[350px] mt-2"
                        onClick={clickEye}
                      />
                    ) : (
                      <EyeOff
                        className="absolute ml-[350px] mt-2"
                        onClick={clickEye}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="keepSigned" checked={checked} onClick={clickCheck} />
            <label
              htmlFor="keepSigned"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Keep me signed in
            </label>
          </div>
          <Button type="submit" className="w-full" variant={"primary"}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}


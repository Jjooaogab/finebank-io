import Link from "next/link";
import FormLogin from "./components/form";
import GoogleLogin from "./components/googleLogin";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex text-teal-600 text-3xl">
          <h1 className="font-bold">FINE</h1>bank<h1 className="font-bold">.IO</h1>
        </div>
        <h3 className="font-bold text-lg">Create an account</h3>
        <FormLogin />
        <span className="text-xs text-zinc-400">or sign up with</span>
        <GoogleLogin />
        <h3 className="text-teal-600 text-sm">Already have an accounut? <Link href={"/login"} className="text-teal-600 font-bold cursor-pointer">Sign in here</Link></h3>
      </div>
    </main>
  );
}

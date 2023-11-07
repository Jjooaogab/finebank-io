import Link from "next/link";
import FormLogin from "./components/form";
import GoogleLogin from "./components/googleLogin";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="text-teal-500 text-3xl">
          <span className="font-bold">FINE</span>bank<span className="font-bold">.IO</span>
        </div>
        <FormLogin />
        <span className="text-xs text-zinc-400">or sign in with</span>
        <GoogleLogin />
        <Link href={"/signup"} className="text-teal-600 text-sm font-medium cursor-pointer">Create an account</Link>
      </div>
    </main>
  );
}

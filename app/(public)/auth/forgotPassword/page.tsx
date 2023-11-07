import Link from "next/link";
import FormResetPass from "./components/form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex text-teal-600 text-3xl">
          <h1 className="font-bold">FINE</h1>bank
          <h1 className="font-bold">.IO</h1>
        </div>
        <div className="text-center w-80">
          <h3 className="font-bold text-lg">Forgot Password?</h3>
          <span>Enter you email address to get the password reset link.</span>
        </div>
        <FormResetPass />
        <Link
          href={"/login"}
          className="text-teal-600 text-sm font-medium cursor-pointer"
        >
          Back to login
        </Link>
      </div>
    </main>
  );
}

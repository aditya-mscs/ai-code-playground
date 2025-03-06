import type { Metadata } from "next"
import Link from "next/link"
import SignupForm from "@/components/auth/SignupForm"

export const metadata: Metadata = {
  title: "Sign Up | Influencer Marketplace",
  description: "Create your Influencer Marketplace account",
}

export default function SignupPage() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-80px)] max-w-md flex-col items-center justify-center">
      <div className="w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">Enter your details to create your account</p>
        </div>
        <SignupForm />
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}


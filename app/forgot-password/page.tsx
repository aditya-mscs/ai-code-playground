import type { Metadata } from "next"
import Link from "next/link"
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"

export const metadata: Metadata = {
  title: "Forgot Password | Influencer Marketplace",
  description: "Reset your Influencer Marketplace password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-80px)] max-w-md flex-col items-center justify-center">
      <div className="w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-muted-foreground">Enter your email to reset your password</p>
        </div>
        <ForgotPasswordForm />
        <div className="text-center text-sm">
          Remember your password?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}


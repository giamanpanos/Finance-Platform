import Image from "next/image";
import { Loader2 } from "lucide-react"; // from shad-ui
import { SignUp, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
// Because the box to insert the inform to sign in is appearing few milliseconds after the page, we wrapped it with the ClerkLoaded to display it once loaded and until then (ClerkLoading) we display the Loader 2

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex flex-col items-center justify-center px-4 ">
        <Image src="/logo.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
}

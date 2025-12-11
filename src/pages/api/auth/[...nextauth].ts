import { config } from "@/config"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret,
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
  },
}

export default NextAuth(authOptions)


// (1) google cloud --> project create --> client_id, client_secret
// (2) .env file --> config
// (3) pages/api --> auth folder --> [...nextauth].ts
// (4) signIn, signOut 
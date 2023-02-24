import NextAuth from "next-auth";
import GoogleProviser from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProviser({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
};

export default NextAuth(authOptions);
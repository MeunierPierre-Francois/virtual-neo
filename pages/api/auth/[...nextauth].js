import NextAuth, { AuthOptions } from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../app/lib/mongodb"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "../../../app/models/User"
import bcrypt from "bcrypt"
import { mongooseConnect } from "../../../app/lib/mongoose"

const adminEmails = ['admin@admin.com']

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        mongooseConnect(),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Veuillez remplir tous les champs");
                }

                const user = await User.findOne({ email: credentials.email });

                if (!user || !user?.hashedPassword) {
                    throw new Error("Email incorrect");
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error("Mot de passe incorrect");
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,

}
export default NextAuth(authOptions);
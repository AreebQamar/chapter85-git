
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/models/user";
import db from "@/config/connectToDb"


var CryptoJS = require("crypto-js");

const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",

  },
  providers: [
    CredentialsProvider({

      type: 'credentials',
      credentials: {},


      async authorize(credentials, req) {

        const { password, email } = credentials;

        await db.connect();
        const user = await User.findOne({ email });
        //console.log("api: ", user);
       
        if (user) {

          var bytes = CryptoJS.AES.decrypt(user.password, process.env.NEXT_PUBLIC_AES_SECRET);
          var decPassword = bytes.toString(CryptoJS.enc.Utf8);
          
          if (decPassword === password) {

            return user
          }

          throw new Error("Invalid Email or Password");
        }

        throw new Error("Invalid Email or Password");

      }
    })

  ],

  pages: {
    signIn: "/login",
    signOut: "/"
  }
}


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


//export default NextAuth(authOptions)
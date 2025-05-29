import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  setPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../../../config/firebaseconfig";

// Need to use the React-specific entry point to import createApi
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

// custom logic for google Provider for popuping everytime the user visists 
let getGoogleProvider=()=>{
    const provider = new GoogleAuthProvider();
   provider.setCustomParameters({ prompt:"select the account"});
   return provider
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // for crud operation in the server we use buider.mutation
    // for fetching the data from derver we user builder.query
    // register user start
    registerUser: builder.mutation({
      async queryFn({email,password}) {
        try {
            let userCredential=await createUserWithEmailAndPassword(auth, email, password);
            return {data:userCredential.user}
        } catch (err) {
            return {error :{message:err.message}}
        }
      }, 
    }),
    // register end
    // login user start
    loginUser: builder.mutation({
      async queryFn({email,password}) {
        try {
            let userCredential=await signInWithEmailAndPassword(auth, email, password);
            return {data:userCredential.user}
        } catch (err) {
            return {error :{message:err.message}}
        }
      },
    }),

    // loginuserEnd
    // google login start
    googleLogin: builder.mutation({
      async queryFn() {
        try {
            let provider=getGoogleProvider();
            let result=await signInWithPopup(auth, provider);
            let isNewUser=await getAdditionalUserInfo(result)?.isNewUser
            return {data:{user:result.user,isNewUser}}
        } catch (err) {
             return {error :{message:err.message}}
        }
      },
    }),
    // google login end
    // logout user start
    logoutUser: builder.mutation({
      async queryFn() {
        try {
             await signOut(auth)
             return {data:true}
        } catch (err) {
            return {error :{message:err.message}}
        }
      },
    }),
    // logout user end
    // resetpassword-start
    resetPassword: builder.mutation({
      async queryFn(email) {
        try {
            await sendPasswordResetEmail(auth,email)
             return {data:true}
        } catch (err) {
             return {error :{message:err.message}}
        }
      },
    }),
    // resetpassword-end
    // update_profile start
    updateProfile: builder.mutation({
      async queryFn({displayName,photoURL}) {
        try {
            if(!auth.currentUser) throw new Error("no authenticated user");
            await updateProfile(auth.currentUser, {displayName, photoURL})
            return {data:{displayName,photoURL}}
        } catch (err) {
            return {error :{message:err.message}}
        }
      },
    }),

    // update_profile end
  }),
});

export const { 
    useRegisterUserMutation,
    useLoginUserMutation,
    useGoogleLoginMutation,
    useLogoutUserMutation,
    useUpdateProfileMutation,
    useResetPasswordMutation
} = authApi;

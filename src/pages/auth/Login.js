import React from 'react'
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Signup from './Signup';
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEffect } from "react";


function Login() {
  const [passwordHide, setpasswordHide] = useState(true);
  const [receviedtoken, setToken] = useState(null);

  const validate = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setSubmitting(true);
      setSubmitting(false);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  useEffect(() => {
    if (localStorage.getItem("accessToken", null) !== null && localStorage.getItem("accessToken", null) !== undefined) {
      window.open("/dashboard", "_self");
    }
  }, []);


  return (
    <div>
        {/* <GoogleReCaptchaProvider reCaptchaKey="6Lek2pYiAAAAAFd1FkbK2xNDJJJyyCa3LBVvVHlt">
        <GoogleReCaptcha
          onVerify={(token) => {
            if (!receviedtoken) {
              console.log(token);
              setToken(token);
            }
          }}
        />
      </GoogleReCaptchaProvider> */}
    <div className='bg-zinc-200  h-screen flex justify-center items-center'>
        <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-450 pl-10  pt-5 pb-5 w-[450px] flex flex-col justify-center'>
        <FormikProvider value={formik}>

            <form className='space-y-3' action="">
                <div>
                    <p className="flex justify-center font-bold text-2xl tracking-wide">LOGIN</p>

                </div>
               
                <div className='mr-10'>
                    <p className="text-zinc-600 font-semibold">Email :</p>
                    <input {...getFieldProps("email")} className='outline-none h-10 px-5 border border-sm w-full' type="text" placeholder="Email" required/>
                    <span className="invalid-feedback" style={{ display: Boolean(touched.email && errors.email) ? "block" : "none" }}>
                  {errors.email}
                </span>
                </div>
                <div className='mr-5'>
                    <p className="text-zinc-600 font-semibold">Password</p>
                    <input type={passwordHide ? "password" : "text"}
                    {...getFieldProps("password")} className='outline-none h-10 px-5 border border-sm w-full' placeholder="Password" required/>
                     <span >
                    <i
                      className={passwordHide ? "bi bi-eye-slash" : "bi bi-eye"}
                      id="togglePassword"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setpasswordHide(!passwordHide);
                      }}
                    />
                  </span>
                </div>

                <div className='flex space-y-2 gap-5 mt-1'>
                    <input type="checkbox"/>
                    <p> Keep me Signed-In? </p>
                </div>
                <div className='mr-5'>
                    <button className='bg-blue-400 h-10 rounded-full hover:bg-blue-600 duration-300 w-full text-white font-semibold '>LOGIN</button>
                    <p className='text-end'>Forgot Password?</p>
                </div>
                <p className="flex justify-center font-bold">OR</p>
                <div className='flex flex-row justify-center gap-10 text-3xl'>
                    <AiFillFacebook className='rounded-full text-blue-600'/>
                    <AiFillGoogleCircle className='rounded-full text-red-600'/>
                </div>
                <div className='mb-10'>
                    <p className='text-zinc-500'>Create an Account? <span className='text-black font-bold underline underline-offset-4'><Link to='/Signup' element={<Signup/>}>SignUp</Link></span></p>
                </div>

            </form>
            </FormikProvider>

        </div>
    </div>
    </div>
  )
}

export default Login;
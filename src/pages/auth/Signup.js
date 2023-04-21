import React from 'react';
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Login from './Login';
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
// import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

function Signup() {
  const [passwordHide, setpasswordHide] = useState(true);
  const [receviedtoken, setToken] = useState(null);

  const validate = Yup.object().shape({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    phone: Yup.number()
      // .phone('Phone is invalid')
      .required('Phone Number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
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
      window.open("/login", "_self");
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

            <form autoComplete="off" noValidate onSubmit={handleSubmit} className='space-y-3' action="">
                <div>
                    <p className="flex justify-center font-bold text-2xl tracking-wide">SignUp</p>
                </div>
                
                <div className='mr-10'>
                    <p className="text-zinc-600 font-semibold">Name :</p>
                    <input {...getFieldProps("name")} className='outline-none h-10 px-5 border border-sm w-full' type="text" placeholder="Name" required/>
                    <span className="invalid-feedback" style={{ display: Boolean(touched.name && errors.name) ? "block" : "none" }}>
                            {errors.name}
                    </span>
                </div>
                <div className='mr-10'>
                    <p className="text-zinc-600 font-semibold">Email :</p>
                    <input {...getFieldProps("email")} className='outline-none h-10 px-5 border border-sm w-full' type="text" placeholder="Email" required/>
                    <span className="invalid-feedback" style={{ display: Boolean(touched.email && errors.email) ? "block" : "none" }}>
                            {errors.email}
                          </span>
                </div>
                <div className='mr-10'>
                    <p className="text-zinc-600 font-semibold">Phone Number :</p>
                    <input {...getFieldProps("phone")} className='outline-none h-10 px-5 border border-sm w-full' type="text" placeholder="Phone Number" required/>
                    <span className="invalid-feedback" style={{ display: Boolean(touched.phone && errors.phone) ? "block" : "none" }}>
                            {errors.phone}
                          </span>
                </div>
                <div className='mr-5'>
                    <p className="text-zinc-600 font-semibold">Password :</p>
                    <input type={passwordHide ? "password" : "text"}
                            {...getFieldProps("password")} className='outline-none h-10 px-5 border border-sm w-full' id="password" placeholder="Password" required/>
                            <span className="invalid-feedback" style={{ display: Boolean(touched.password && errors.password) ? "block" : "none" }}>
                            {errors.password}
                          </span>
                </div>
                <div className='mr-5'>
                    <p className="text-zinc-600 font-semibold">Confirm Password :</p>
                    <input type={passwordHide ? "confirmPassword" : "text"}
                            {...getFieldProps("confirmPassword")} className='outline-none h-10 px-5 border border-sm w-full' id="confirmPassword" placeholder="Confirm Password" required/>
                    <span className="invalid-feedback" style={{ display: Boolean(touched.confirmPassword && errors.confirmPassword) ? "block" : "none" }}>
                            {errors.confirmPassword}
                          </span>
                </div>
               
                <div className='mr-5'>
                    <button type="submit" loading={isSubmitting}  className='bg-blue-400 h-10 rounded-full hover:bg-blue-600 duration-300 w-full text-white font-semibold '>
                      SignUp</button>
                </div>
                <p className="flex justify-center font-bold">OR Register using</p>

                <div className='flex flex-row justify-center gap-10 text-3xl'>
                    <AiFillFacebook className='rounded-full text-blue-600'/>
                    <AiFillGoogleCircle className='rounded-full text-red-600'/>
                </div>
                <div className='mb-10'>
                    <p className='text-zinc-500'>Already have an Account? <span className='text-black font-bold underline underline-offset-4'><Link to='/Login' element={<Login/>}>LogIn</Link></span></p>
                </div>

            </form>
            </FormikProvider>

        </div>
    </div>
    </div>
  );
}

export default Signup;
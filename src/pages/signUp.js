import React, { useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, InputForm } from '../components';
import { auth, firestore, createDoc } from '../firebase'
import { AuthContext } from '../provider/provider'
import { useHistory } from "react-router-dom"
export const Signup = () => {
    let history = useHistory();
    const [form, setFrom] = useState({ username: "", email: "", password: "", confPass: "" });
    const change = (e) => {
        setFrom({ ...form, [e.target.id]: e.target.value })
    }
    const signUp = async () => {
        const { email, password, confPass, username } = form;
        if (password === confPass) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { uid } = userCredential.user;
                    createDoc(`users/${uid}`, { username, email })
                    history.push('/login');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else alert("Password did not match.");
    }
    return (
        <Layout>
            <div className='h100 flex justify-center'>
                <div className='form  w-8 flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <IconStartBracket />
                        <IconDash />
                        <IconEndBracket />
                    </div>
                    <div className='font-lobster c-primary fs-30 lh-32 '>
                        Boginoo
                </div>
                    <div className='font-ubuntu c-primary fs-20 lh-23 mt6 bold'>
                        Бүртгүүлэх
                </div>
                    <div>
                        <div>
                            <InputForm className='input b-gray0 h-5 w-8 ' placeholder="Name" onChange={change} id="username" label="Хэрэглэгчийн нэр" />
                        </div>
                        <div>
                            <InputForm label="Цахим хаяг" className='input b-gray0 h-5 w-8 ' placeholder="email@gmail.com" onChange={change} id="email" />
                        </div>
                        <div>
                            <InputForm label="Нууц үг" className='input b-gray0 h-5 w-8 ' placeholder="Password..." type="password" onChange={change} id="password" />
                        </div>
                        <div>
                            <InputForm label="Нууц үгээ давтна уу?" className='input b-gray0 h-5 w-8 ' placeholder="Re-enter Password" type="password" onChange={change} id="confPass" />
                        </div>
                    </div>
                    <Button className='mt btn ph-4 font-ubuntu w-8 fs-20 lh-23 bold c-default h-5  b-primary ' onClick={signUp}>Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}
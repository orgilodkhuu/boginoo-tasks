import React,{useState} from 'react';
import { InputForm, Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory, useLocation } from "react-router-dom";
import { db, auth } from '../firebase';
const Login = () => {
    let history = useHistory();
    const [form, setFrom] = useState({ email: "", password: "" });
    const change = (e) => {
        setFrom({ ...form, [e.target.id]: e.target.value })
    }
    const login = () => {
        const { email, password } = form;
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                history.push('/')
                var user = userCredential.user;

            })
            .catch((error) => {
                alert(error)
            });
    }
    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='mt font-lobster c-primary fs-30 lh-32'>
                    Boginoo
                </div>
                <InputForm label="Цахим хаяг" className="input b-gray0 h-5 w-8 " placeholder='email@gmail.com' type="email" onChange={change} id="email" />
                <InputForm label="Нууц үг" className="input b-gray0 h-5 w-8 " placeholder='Password...' type="password" onChange={change} id="password" />
                <div className='flex flex-row'>
                    <div className="mt c-primary ph-4 font-ubuntu fs-12 lh-18">Намайг сана</div>
                    <a href="/reset" className=" c-primary mt ph-4 font-ubuntu fs-12 lh-18 underline">Нууц үгээ мартсан</a>
                </div>
                <Button className={"w-8 mt font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary" } onClick={login}>Нэвтрэх</Button>
                <a href="/signup" className="mt c-primary ph-4 font-ubuntu fs-12 lh-18 underline">Шинэ хэрэглэгч бол энд дарна уу</a>
            </div>
        </Layout>
    )
}

export default Login;
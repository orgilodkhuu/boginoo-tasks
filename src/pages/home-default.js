import React, { useContext, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import useCollection from '../components/col.js';
import { firebase, auth, firestore } from '../firebase.js';
import { AuthContext } from '../provider/provider';
export const HomeDefault = () => {
    const { data, createDoc, updateDoc, deleteDoc } = useCollection('short')
    const [link, setLink] = useState('');
    let { user } = useContext(AuthContext);
    const short = () => {
        if (link === '') return;
        let rand = Math.random().toString(36).substring(7);
        createDoc( link, rand );
        setLink('');
    }
    const change = (e) => {
        setLink(e.target.value);
    }
    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input onChange={change} className="input ph-4 b-gray0 h-5 w-8 " placeholder='https://www.web-huudas.mn' value={link}/>
                    <Button onClick={short} className={"font-ubuntu mb-20 fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary"}>Богиносгох</Button>
                </div>
                <div style={{height: '300px', overflow: 'scroll', width: '500px'}}>
                    History
                    {data.map((el) =>{
                        return <div style={{borderTop: '1px solid black', display: 'flex', justifyContent: "space-between"}}>
                            <div className="custom-1">Original URL: {el.og}</div>
                            <div className="custom-1">Shortened URL: http://localhost:3000/{el.id}</div>
                        </div>
                    })}
                </div>
            </div>
        </Layout>
    )
}
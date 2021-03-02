import React, { useContext, useState, useRef, useEffect } from 'react';
import { Button } from './';
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from '../provider/provider'
import { firebase, db, storage, auth } from '../firebase'
export const Navigation = (props) => {
    let history = useHistory();
    let location = useLocation();
    let authh = useContext(AuthContext);
    const out = () => {
        auth.signOut().then(() => {
            console.log('signedout')
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {
                (authh.userReady) ?
                    <div>
                        <div onClick={out} className="flex flex-center">
                            <a className="flex justify-center items-center ml-4 font-ubuntu fs-20 lh-23 bold black-text">{authh.email}
                                <button style={{ display: 'flex', justifyContent: 'center' }} className="btn w-3 fs-10 justify-center items-center"> <i class="material-icons">exit_to_app</i></button>
                            </a>
                        </div>
                    </div> :
                    <Button className="btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary " onClick={() => { history.push("/login"); }}>Нэвтрэх</Button>
            }
        </div>
    );
};
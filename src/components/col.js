import { useEffect, useState } from "react"
import {db, firebase} from '../firebase.js';

const useCollection = (path) => {

    const [data, setData] = useState([])

    useEffect(() => {
        if (db && path) {
            db.collection(path).onSnapshot(s => {
                const data = s.docs.map(item => ({ ...item.data(), id: item.id }))

                setData(data);
            })
        }

        return () => { }
    }, [db, path])

    const createDoc = (docId, dat) => {
        let data = `http://localhost:3000/${dat}`;
        console.log(data);
        if(docId!=undefined){
            db.doc(`/${path}/${dat}`).set({
                og: docId,
            })
        }
    }

    return { data, createDoc }
}
export default useCollection;
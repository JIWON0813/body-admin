import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    
    const LoginFunc = async (e) =>{
        e.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));

        const query = `
            query {
                test
            }`

        const response = await fetch(
            "http://localhost:8080/graphql",
            {
                method : "POST",
                headers :{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({query})
            }
        )

        const result = await response.json()

        if(result.data == 'hi'){
            navigate('/board');
        }
        else{
            alert('로그인 실패')
        }
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={LoginFunc}>
                <label htmlFor="id">ID :</label>
                <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
                <br />
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button type="submit">로그인</button>
                <br />
            </form>
        </>
    )
}

export default Login
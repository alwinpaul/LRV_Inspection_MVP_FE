import { Button } from 'antd';
import { ChangeEvent, useState } from 'react'

export default function Login() {

    const [pass, setPass] = useState("");
    const [username, setUserName] = useState("");


    const handleUsernameChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setUserName(evt.target.value)
    }

    const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setPass(evt.target.value)
    }

    const handleLogin = () => {
        console.log(pass, username)
    }

    return (

        <section className="w-full h-[100vh] flex justify-center">
            <div className='w-6/12 flex items-center relative'>
                <img src="/img/mobile-login.jpg" alt="login" className='m-20 w-8/12' />
                <div className='absolute bottom-0 right-0 text-xs m-5 '>
                    <a href="https://www.freepik.com/free-vector/mobile-login-concept-illustration_4957412.htm#query=login&position=4&from_view=keyword&track=sph&uuid=401bb2d7-68f7-4fc5-aca9-b9d7261b50ea">Image by storyset</a> on Freepik
                </div>
            </div>
            <div className='w-6/12 flex items-center bg-blue-100'>
                <div>
                    <div className='w-full flex items-center justify-center'>
                        <img src="/img/logo.svg" alt="logo" className='my-2 w-4/12' />
                    </div>
                    <form className="sic-box px-10 py-20 w-full" onSubmit={handleLogin}>
                        <div className="sic-field flex items-center justify-start my-5">
                            <div className="label w-1/3">Email : </div>
                            <div className="inputf w-2/3">
                                <input type="text" name="username" id="username" onChange={handleUsernameChange} className='border border-gray-900/50 rounded-md w-full h-10 p-2' />
                            </div>
                        </div>
                        <div className="sic-field flex items-center justify-start my-5">
                            <div className="label w-1/3">Password : </div>
                            <div className="inputf w-2/3">
                                <input type="password" name="password" id="password" onChange={handlePasswordChange} className='border border-gray-900/50 rounded-md w-full h-10 p-2' />
                            </div>
                        </div>
                        <div className="btn flex items-center justify-center">
                            <Button type="primary" size='large' htmlType="submit">Login</Button>
                        </div>
                    </form>
                </div>

            </div>
        </section>

    )
}

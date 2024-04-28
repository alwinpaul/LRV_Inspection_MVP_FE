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

        <section className="w-full mt-20 flex justify-center">
            <div className='w-full sm:w-4/12 sm:p-5 flex items-center bg-blue-100 border-2 border-blue-300 rounded-lg shadow-md'>
                <form className="sic-box p-3 w-full" onSubmit={handleLogin}>
                    <div className="sic-field sm:flex items-center justify-start my-5">
                        <div className="label sm:w-1/3 text-left">Email : </div>
                        <div className="inputf w-full sm:w-2/3">
                            <input type="text" name="username" id="username" onChange={handleUsernameChange} className='border border-gray-900/50 rounded-md w-full h-10 p-2' />
                        </div>
                    </div>
                    <div className="sic-field sm:flex items-center justify-start my-5">
                        <div className="label sm:w-1/3 text-left">Password : </div>
                        <div className="inputf w-full sm:w-2/3">
                            <input type="password" name="password" id="password" onChange={handlePasswordChange} className='border border-gray-900/50 rounded-md w-full h-10 p-2' />
                        </div>
                    </div>
                    <div className="btn flex items-center justify-center">
                        <Button type="primary" size='large' htmlType="submit">Login</Button>
                    </div>
                </form>
            </div>
        </section>

    )
}

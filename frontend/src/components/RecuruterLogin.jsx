import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const RecuruterLogin = () => {

    const {setShowRecruiterLogin} = useContext(AppContext);

    const [state, setState] = useState('Login');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [image, setImage] = useState(false);

    const [isTextDataSubmited, setIsTextDataSubmited] = useState(false)


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if(state === "Sign up" && !isTextDataSubmited){
            setIsTextDataSubmited(true);
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
        document.body.style.overflow = 'unset'
            
        }
    })
  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
            <p className='text-sm'>Welcome back! Please sign in to continue</p>
            { state === "Sign up" && isTextDataSubmited 
            ? <>
                <div className='flex items-center gap-4 my-10'>
                    <label htmlFor="image">
                        <img className='w-16 rounded-full' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" hidden id="image" />
                    </label>
                    <p>Upload Company <br /> Logo </p>
                </div>
              </>
            : <>
                {state !== 'Login' && (
                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.person_icon} alt="" />
                    <input className='outline-none text-sm' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
                </div>
                )}
        
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.email_icon} alt="" />
                    <input className='outline-none text-sm' onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Email ' required />
                </div>
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.lock_icon} alt="" />
                    <input className='outline-none text-sm' onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                </div>

            </>
            }
            
            
            {
                state === "Login" && 
                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget Password</p>
            }    

            <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full mt-3'>
                {state === 'Login' ? 'Login' : isTextDataSubmited ? 'Create Account' : 'Next'}
            </button>

            {
            state === "Login" 
            ?<p className='text-center mt-3 text-sm'>Don't have an account? <span className='text-blue-600 cursor-pointer'  onClick={()=>setState("Sign up")}>Sign up</span></p>
            :<p className='text-center mt-3 text-sm'>Already have an account? <span  className='text-blue-600 cursor-pointer' onClick={()=>setState("Login")}>Login</span></p>
            }

            <img  onClick={()=>setShowRecruiterLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
        </form>
    </div>
  )
}

export default RecuruterLogin
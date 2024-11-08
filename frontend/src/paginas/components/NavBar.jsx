import React from 'react'
import {Menu, X} from 'lucide-react'
import {useState} from 'react'

import logo from '../assets/logo.png'
import { navItems } from '../../constants'
import { LogoutButton } from '@userfront/react'




const NavBar = () =>{
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                        <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink 0">
                        <img className="h-10 w-10 mr-2 rounded-md" src ={logo} alt= "logo">
                        </img>
                        <a href="/">
                        <span className="text-xl tracking-tight">ESP32</span>

                        </a>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item,index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="/login" className="py-2 px-3 border rounded-md">
                                Sign in
                            </a>
                            <a href="/cadastro" className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md">
                                Create an account
                            </a>
                        <a href="">
                            <LogoutButton></LogoutButton>
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                             {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>    
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col rounded-2xl justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index)=>(
                                <li key={index} className="py-3 px-2 border-2 rounded-md m-5 border-purple-700">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 py-5">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800">
                                Create An Account
                            </a>
                        </div>

                        <LogoutButton></LogoutButton>

                    </div>
                )}
            </div> 
        </nav>
    )
}

export default NavBar
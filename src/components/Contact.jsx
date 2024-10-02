import React from 'react'
import logo from '../image/Logo.png'

const Contact = () => {
  return (
    <div className="bg-[#44624A] text-white flex justify-between items-center p-10 font-mono">
        <div>
            <img src={logo} alt="Dar Logo" className="w-16" />
        </div>

        <div className="text-left"> 
            <p className="text-lg font-semibold">Drop me a line</p>
            <p className="text-xl font-bold mt-2">
            <a href="mailto:darrenanthonybeltham@gmail.com" className="underline">
                darrenanthonybeltham@gmail.com
            </a>
            </p>
        </div>

        <div className="flex space-x-8">    
            <div>
                <p className="text-lg font-semibold">Link</p>
                <ul className="mt-2 space-y-2">
                <li>
                    <a href="#" className="underline">
                    Skill
                    </a>
                </li>
                <li>
                    <a href="#" className="underline">
                    Project
                    </a>
                </li>
                <li>
                    <a href="#" className="underline">
                    Experience
                    </a>
                </li>
                </ul>
            </div>
            
            <div>
                <p className="text-lg font-semibold">Social Media</p>
                <ul className="mt-2 space-y-2">
                <li>
                    <a href="#" className="underline">
                    Instagram
                    </a>
                </li>
                <li>
                    <a href="#" className="underline">
                    LinkedIn
                    </a>
                </li>
                <li>
                    <a href="#" className="underline">
                    WhatsApp
                    </a>
                </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Contact

"use client";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import TopBanner from "@/components/TopBanner/TopBanner";
import Image from "next/image";

export default function Enquires() {
    // Environment variables
    const serviceId = `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`;
    const templateId = `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`;
    const publicKey = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_K}`;

    const [emailSent, updateEmailSent] = useState(false);
    const [error, updateError] = useState({
        state: false,
        message: ""
    });
    const form: any = useRef(null);
    const [loading, updateLoading] = useState(false);

    const Spinner = (    
        <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )

    const sendEmail = (e:Event) => {
        let areFieldsEmpty = false;
        e.preventDefault();
        updateLoading(true);
        
        [...form.current].slice(0, 4).forEach((input: any) => {
            // console.log(input);
            // make sure all inputs are not empty
            if (input.value === "") {
                updateError({state: true, message:`${input.name.toUpperCase()} field is required.`});
                areFieldsEmpty = true;
                // updateLoading(false);
                
                return;
            }
        })

        if (areFieldsEmpty) return;
        
        emailjs
        .sendForm(serviceId, templateId , form.current, {
            publicKey: publicKey,
        })
        .then(
            () => {
                updateEmailSent(true);
                updateError({state: false, message:""});
                updateLoading(false);
            },
            (error) => {
                console.error(`FAILED... ${error.text}`);
                updateEmailSent(false);
                updateError({state: true, message:`error: ${error.text}`});
                updateLoading(false);
            },
        );
        
        // clear form inputs
        form.current.reset();
        // updateLoading(false);
    };

    return (
        <div id="Enquire" className="pt-36 pb-10 px-8 flex flex-col bg-neutral-900 w-full min-h-screen sm:px-20 lg:flex-row lg:justify-around">
            {/* The topbanner is the navigation absolutely positioned, not in document flow */}
            <TopBanner /> 
            
            <Image src="/assets/contact-vector.svg" alt="Contact SVG" 
                className="self-center lg:self-start lg:py-8 lg:mx-6 lg:w-[340px] lg:h-[400px] xl:w-[450px] xl:h-[450px]" width={300} height={320} 
            />
            <div id="form-section" className="lg:mx-4">
                <h2 className='leading-none text-yellow-500 text-center tracking-widest text-[16px] py-8 font-bold lg:text-start'>ENQUIRE</h2>

                <form action="submit" ref={form} onSubmit={(e:any) => sendEmail(e)}>
                    <div id="inputs-in-row" className='sm:flex sm:gap-3'>
                        <input type="text" name='user_name' placeholder='Your name *' className='input-contact'/>
                        <input type="tel" name="user_phone" placeholder='Phone number' className='input-contact'/>
                    </div>

                    <input type="email" name="user_email" placeholder='Your e-mail *' className='input-contact'/>
                    <textarea name="message" placeholder='How can I help you?' rows={4} className='input-contact'></textarea>
                    <button disabled={loading} type="submit" className='w-full py-4 bg-white font-semibold text-yellow-500 text-center transition duration-300 ease-out hover:bg-[#cabe9f] hover:text-white'>
                        {loading? Spinner: "Send Message 🕊️"}
                    </button>
                </form>

                {!error.state && !loading && emailSent?
                <h2 className='py-4 text-green-500 font-bold text-center'>Your Email was successfully sent!</h2>: "" }

                {error.state?
                <h2 className='py-4 text-red-500 font-bold text-center'>There was an Error, please try again later.</h2>: ""}
            </div>
        </div>
    )
}
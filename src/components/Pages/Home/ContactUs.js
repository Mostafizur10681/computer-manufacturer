import React from 'react';
import contactBg from '../../../assets/conatctBg.png'
const ContactUs = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <section className='mb-20' style={{ background: `url(${contactBg})` }} >
            <div style={{ width: '450px' }} className='mx-auto px-12 text-center glass py-20 '>
                <h3 className='font-bold lg:text-4xl text-xl text-white uppercase mb-5'>Contact Us</h3>
                <h2 className='lg:text-3xl text-2xl mb-6 text-white text-black text-white  mb-9'>Stay connected with us</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email Address" height='48px' className="input w-80 lg:w-96" />
                    <br />
                    <input type="text" placeholder="Subject" style={{ height: '48px' }} className="input my-4 w-80 lg:w-96" />
                    <br />
                    <textarea className="textarea w-80 lg:w-96  rounded-lg textarea-bordered" style={{ height: '136px' }} placeholder="Your Message"></textarea>
                    <div className='mt-6'>
                        <button class="btn bg-blue-900">Contact Us</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
import React from 'react';
import contactBg from '../../../assets/conatctBg.png'

const ContactUs = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>

            <div style={{
                background: `url(${contactBg})`,
                backgroundSize: 'cover'
            }} className='bg-primary  py-14 w-full'>
                <div className='text-center pb-14 text-white'>
                    <h2 className='my-12 uppercase text-2xl lg:text-4xl font-bold text-center text-primary'>Contact Us</h2>
                    <h1 className='text-4xl'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <div className='mt-6'>
                        <button class="btn bg-blue-900">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        // <section className='mb-20' style={{ background: `url(${contactBg})` }} >
        //     <div style={{ width: '450px' }} className='mx-auto px-12 text-center glass py-20 '>
        // 
        //         <h2 className='lg:text-3xl text-2xl mb-6 text-white text-black text-white  mb-9'>Stay connected with us</h2>
        //         <form onSubmit={handleSubmit}>
        //             <input type="text" placeholder="Email Address" height='48px' className="input w-80 lg:w-96" />
        //             <br />
        //             <input type="text" placeholder="Subject" style={{ height: '48px' }} className="input my-4 w-80 lg:w-96" />
        //             <br />
        //             <textarea className="textarea w-80 lg:w-96  rounded-lg textarea-bordered" style={{ height: '136px' }} placeholder="Your Message"></textarea>
        // <div className='mt-6'>
        //     <button class="btn bg-blue-900">Contact Us</button>
        // </div>
        //         </form>
        //     </div>
        // </section>
    );
};

export default ContactUs;
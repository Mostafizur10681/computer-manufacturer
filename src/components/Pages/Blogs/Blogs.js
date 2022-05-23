import React from 'react';

const Blogs = () => {
    return (
        <article className='my-24'>
            <blockquote class="card mx-auto w-3/5 bg-base-100 mb-8 px-12 shadow-2xl">
                <div class="card-body">
                    <h2 class="card-title text-blue-900 text-2xl">How will you improve the performance of a React Application?</h2>
                    <p>To get the best React rendering, ensure sure components only get the props they need.
                        It will allow you to manage CPU usage and avoid rendering superfluous features.
                        The idea is to construct a functional component that will collect and transfer all properties to other components.</p>

                </div>
            </blockquote>
            <blockquote class="card mx-auto w-3/5 bg-base-100 mb-8 px-12 shadow-2xl">
                <div class="card-body">
                    <h2 class="card-title text-blue-900 text-2xl">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        <br />
                        <span className='font-bold'>1.Local state:</span> Local state is data we manage in one or another component.
                        <br />
                        <span className='font-bold'>2.Global state:</span> Global state is data we manage across multiple components.
                        <br />
                        <span className='font-bold'>3.Server state:</span> Data that comes from an external server that must be integrated with our UI state.
                        <br />
                        <span className='font-bold'>4.URL state:</span> Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
            </blockquote>
            <blockquote class="card mx-auto w-3/5 bg-base-100 mb-8 px-12 shadow-2xl">
                <div class="card-body ">
                    <h2 class="card-title text-blue-900 text-2xl"> How does prototypical inheritance work?</h2>
                    <p>Prototypical inheritance refers to the ability to access object properties from another object.
                        To add new properties and methods to an existing object constructor, we utilize a JavaScript prototype.
                        We may tell our JS code to inherit properties from a prototype in this way. Through a reference pointer function,
                        prototypical inheritance allows us to reuse properties or methods from one JavaScript object to another.</p>
                </div>
            </blockquote>
            <blockquote class="card mx-auto w-3/5 bg-base-100 mb-8 px-12 shadow-2xl">
                <div class="card-body ">
                    <h2 class="card-title text-blue-900 text-2xl"> Why you do not set the state directly in React?</h2>
                    <p>It should not update directly because If you update it directly, executing setState() thereafter may just overwrite your changes.
                        This.state is not changed instantly when you directly update the state.
                        Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function.
                        You'll lose control of the state in all of your components.</p>
                </div>
            </blockquote>

            <blockquote class="card mx-auto w-3/5 bg-base-100 mb-8 px-12 shadow-2xl">
                <div class="card-body ">
                    <h2 class="card-title text-blue-900 text-2xl"> What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing allows the programmer to rewrite code later and ensure that the module continues to function properly .
                        The practice is to create test cases for all functions and methods so that any changes that cause a problem can be swiftly discovered and corrected.
                        Before code is deployed, unit testing verifies that it meets quality standards. This ensures a stable engineering environment that promotes quality.</p>
                </div>
            </blockquote>
        </article>
    );
};

export default Blogs;
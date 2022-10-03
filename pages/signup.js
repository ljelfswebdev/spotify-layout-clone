import React from 'react';
import Head from 'next/head';

const signup = () => {
    return (
        <div className="signup">
        <Head>
            <title>Sign Up - Spotify</title>
            <meta name="description" content="Spotify Layout Clone" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

            <div className="container">
                <div className="signup__content">
                    <div className="upperText">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-33.4974 -55.829 290.3108 334.974"><path d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0" fill="#000"/></svg>
                            Spotify 
                        </span>


                        <p>
                            Sign up for free to start listening.
                        </p>
                    </div>
                    <div className="buttons">
                        <button className="button button--facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" fill="#fff"/></svg>
                            Sign up with Facebook
                        </button>
                        <button className="button button--google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"clipRule="evenodd"/></svg>
                            Sign up with Google
                        </button>
                    </div>
                    <div className="line">
                        <div className="line__line"></div>
                        <div className="line__text">or</div>
                        <div className="line__line"></div>
                    </div>
                    <div className="form">
                        <h2>
                            Sign up with your email address
                        </h2>
                        <form>

                            <div className="signup--form">
                               <label htmlFor="emailAddress">Email Address</label> 
                               <input type="email" name="emailAddress" placeholder="Enter your email" required/>
                            </div>

                            <div className="signup--form">
                               <label htmlFor="confirmEmailAddress">Confirm Email Address</label> 
                               <input type="email" name="confirmEmailAddress" placeholder="Enter your email again"/>
                            </div>

                            <div className="signup--form">
                               <label htmlFor="password">Create a password</label> 
                               <input type="password" name="password" placeholder="Create a password" required/>
                            </div>

                            <div className="signup--form">
                               <label htmlFor="name">What should we call you?</label> 
                               <input type="text" name="name" placeholder="Enter a profile name" required/>
                               <p>This appears on your profile</p>
                            </div>

                            <div className="signup--form">
                                <label htmlFor="dob">What's your date of birth?</label> 
                                <div className="signup--form signup--form__dob">
                                    <div>
                                        <label htmlFor="dob-day">Day</label>
                                        <input type="text" id="dd" maxLength="2" onkeyup="moveToNext(this,'mm')" placeholder="DD"/> 
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="dob-month">Month</label>
                                        <input type="text" id="mm" maxLength="2" onkeyup="moveToNext(this,'yyyy')" placeholder="Month"/>
                                    </div>

                                    <div>
                                        <label htmlFor="dob-year">Year</label>
                                        <input type="text" id="yyyy" maxLength="4" placeholder="Year"/>
                                    </div>
                                 
                                </div>

                                <div className="signup--form signup--form__gender">
                                    <label htmlFor="gender">What's your gender?</label>
                                    <div>                                    
                                        <div>
                                            <input type="radio" name="male" id="male" value="male"/>  
                                            <label htmlFor="male">Male</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="female" id="female" value="female"/>  
                                            <label htmlFor="female">Female</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="non-binary" id="non-binary" value="non-binary"/>  
                                            <label htmlFor="non-binary">Non-binary</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="other" id="other" value="other"/>  
                                            <label htmlFor="other">Other</label>
                                        </div>

                                        {/* <div>
                                            <input type="radio" name="not-to-say" id="not-to-say" value="not-to-say"/>  
                                            <label htmlFor="not-to-say">Prefer not to say</label>
                                        </div> */}

                                    </div>

                                    
                                </div>


                               
                            </div>
                            
                        </form>
                    </div>
                    <div className="captcha">
                        Captcha
                    </div>
                    <div className="lowerText">
                        lowertext
                    </div>
                    <div className="buttons">
                        button
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signup;
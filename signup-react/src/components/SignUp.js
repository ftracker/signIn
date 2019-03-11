import React from 'react'

export default () =>
    <div>
        <form>
            <div>
                <input type="text" name="name" placeholder="Name"/>
            </div>
            <div>
                <input type="text" name="email" placeholder="Email"/>
            </div>

            <div>
                <input type="password" name="pass" placeholder="Password"/>
            </div>

            <div>
                <input type="password" name="pass2" placeholder="Repeat Password"/>
            </div>

            <div>
                <button>
                    Sign Up
                </button>
            </div>
        </form>
    </div>
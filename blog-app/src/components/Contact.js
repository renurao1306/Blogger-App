import React from "react";
import '../App.css'

export default function Contact() {
    return (
        <>
            <div style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', height: '700px', left: 0, right: 0, position: 'fixed' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', color: '#000' }}>
                    <h1>Subscribe to our Newsletter!</h1>
                    <table>
                        <tr>
                            <td>Enter your name:</td>
                            <td><input className="input-form" type="text" placeholder="Your name"/></td>
                        </tr>
                        <tr>
                            <td>Enter your email:</td>
                            <td><input className="input-form" type="email" placeholder="Your email"/></td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <input type="submit" value="Subscribe!" style={{height: '30px', width: '90px', border: '1px solid black'}}/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div >
        </>
    )
}
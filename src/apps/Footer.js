import React, { Component } from "react";

export class Footer extends Component {
    render(){
        return<div className="footer-container-wrapper">
            <div className="footer-title">Newsletter</div>
            <form autoComplete="off">
                <div className="input-group">
                    <input className="email-box" type="text" placeholder="Enter email address"></input>
                    <button className="btn-subscribe" >Subscribe</button>
                </div>
            </form>
            <div className="text-center cp-rights">
            © 2019 Indegene. All rights reserved	|	Contact Us	|	Privacy Policy	|	CSR Policy
            </div>
        </div>
    }
}

export default Footer;
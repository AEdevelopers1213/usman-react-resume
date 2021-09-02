import resumeImg from "../assets/img/3.jpg";
import Sidebar from "./common/Sidebar";
import {Menu, Test} from "./Menu";
import React, {useState} from 'react';


const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        comment: ""
    })

    const InputEvent = (event) =>{
        const{name, value} =event.target
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Name ${data.fullname}` + `Email ${data.email}` + `Comment ${data.comment}`);
    }

    return (
        <>
            <Sidebar
                imgSrc={resumeImg}
                PageName={"CONTACT ME"}
            />
            <div className="contentBar">
                <Menu/>
                <Test
                    pageTitle="GET IN TOUCH"
                    pageName="CONTACT ME"
                />
                <div className="contactUs">
                    <div className="container">
                        <h3>SAY SOMETHING</h3>
                        <form className="form" onSubmit={formSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" placeholder="Name" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="text" placeholder="Email" className="form-control" name="email" value={data.email} onChange={InputEvent}/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" placeholder="Message" className="form-control comment" name="comment" value={data.comment} onChange={InputEvent}/>
                                </div>
                                <input type="submit" value="Send Message"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
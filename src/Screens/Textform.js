import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { TextformAction, getUserData } from '../Actions/TextformAction';

function Textform() {

    const dispatch = useDispatch();
    const [first_name, setName] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEma] = useState("")

    const [nameerr, setNameerr] = useState("")
    const [lnameerr, setLnameerr] = useState("")
    const [emailerr, setEmailerr] = useState("")

    const userData = useSelector(state => state.userData);

    const { loading, userInfo } = userData;

 console.log("userData",userInfo);

    useEffect(() => {

            dispatch(getUserData());  
    }, [dispatch,userInfo==true]);
 
    function Getdata(e) {


        e.preventDefault();

        // if (first_name == "") {
        //     setNameerr("Please Enter Name")
        // } else if (last_name == "") {
        //     setLnameerr("Please Enter")
        // } else if (email == "") {
        //     setEmailerr("Please Enter")
        // } else {
        //     setNameerr("");
        //     setLnameerr("");
        //     setEmailerr("");
        // }

        dispatch(TextformAction(first_name, last_name, email))

        setName("");
        setLast("");
        setEma("");

    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>FIRST NAME</Form.Label>
                    <Form.Control
                        value={first_name}
                        placeholder="Enter email"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </Form.Group>
                <span type="text" style={{ color: 'red' }}>{nameerr}</span>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>LAST NAME</Form.Label>
                    <Form.Control
                        value={last_name}
                        placeholder="Password"
                        onChange={(e) => { setLast(e.target.value) }}
                    />
                </Form.Group>
                <span type="text" style={{ color: 'red' }}>{lnameerr}</span>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control placeholder="EMAIL"
                        value={email}
                        onChange={(e) => { setEma(e.target.value) }}
                    />
                </Form.Group>
                <span type="text" style={{ color: 'red' }}>{emailerr}</span>


                <Button variant="primary" type="submit"
                    onClick={Getdata}

                >
                    Submit
                </Button>

            </Form>

            <table>
                <thead>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        loading ? null : userInfo == undefined?  null:
                            userInfo.map((data, id) =>
                                <tr key={id}>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.email}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Textform;
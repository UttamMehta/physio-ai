
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import axios from 'axios';
import jsPDF from "jspdf";


// let userDefault ={
//   name: "John Doe",
//   fatherName: "Abcd",
//   dob: "January 1, 1990",
//   gender: "Male",
//   photo: "https://i.pinimg.com/originals/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg",
//   blood_group:"B+",
//   signature: "https://pbs.twimg.com/media/D9z0TuNU4AAp6HZ?format=jpg&name=4096x4096",
//   enrollment_no:"65451412154",
// }

const Login= () => {
    const [data,setData]=useState({uid:"satmis10000",password:"Asdf1234#",blocked:0})// data will get update but to check login just default added
    const [login,setLogin]=useState(false);
    const navigate = useNavigate();

    function updatedata(e){
        const {name,value}=e.target;
        setData(prev=>({...prev,[name]:value}));
    }

    // console.log(data);
    async function check(){
        console.log("clicked");
        try {
         const jsonData = JSON.stringify(data);
        const encodedPayload = btoa(jsonData);
        const apiUrl = "https://myphysio.digitaldarwin.in/api/login_v1/";
        const payload = {
            "payload": encodedPayload,
             "device":"mobile", "browser":"chrome","browser_version":"1",
             "os":"mac",
          };
        //   console.log(payload);
         await axios.post(apiUrl,payload).then(response => {
         console.log('Response:', response);
         localStorage.setItem('user', JSON.stringify("true"));
        //  localStorage.setItem('user', JSON.stringify(response));
        setLogin(true);
        alert("loged in with response from api");
        decoded(response);

        navigate("/graph");

        }).catch(error => {
        console.error('Error on 28 line:', error);
        setLogin(true);
        localStorage.setItem('user', JSON.stringify("true"));
        alert("loged in but not got response from api default value will be shown");
        navigate("/graph");
         });   
        // let payload=
        //    { "payload":"eyJ1aWQiOiJzYXRtaXMxMDAwMCIsInBhc3N3b3JkIjoiQXNkZjEyMzQjIiwiYmxvY2tlZCI6MH0=", "device":"mobile", "browser":"chrome","browser_version":"1", "os":"mac"};
        
        // const requestOptions = {
        //     method: 'POST',
        //     body:{"payload":"eyJ1aWQiOiJzYXRtaXMxMDAwMCIsInBhc3N3b3JkIjoiQXNkZjEyMzQjIiwiYmxvY2tlZCI6MH0=", "device":"mobile", "browser":"chrome","browser_version":"1", "os":"mac"},
        //   };

        let req=await fetch("https://myphysio.digitaldarwin.in/api/login_v1/",{
            method:"POST",
            body:JSON.stringify(payload),
        });
        console.log(req);
        let res=await req.json();
        console.log(res);

        } catch (error) {
            console.log("Error on 32 line",error);
        }
    }

    // async function check(){
    //     try {
    //         let api="https://myphysio.digitaldarwin.in/api/login_v1/";
    //         let payload={"payload":"eyJ1aWQiOiJzYXRtaXMxMDAwMCIsInBhc3N3b3JkIjoiQXNkZjEyMzQjIiwiYmxvY2tlZCI6MH0=", "device":"mobile", "browser":"chrome","browser_version":"1", "os":"mac"};
    
    //         // let res=JSON.parse(await fetch(api,{
    //         //     method:"POST",
    //         //     body:JSON.stringify({payload}),
    //         //         }))
    //         let x=await axios.post(api,JSON.stringify(payload)}
    //         ).then((response)=>{
    //             console.log(response);
    //         }).catch((err)=>{
    //             console.log(err);
    //         })
            
    //     } catch (error) {
    //         console.log(error);
    //     }
       //}


    function decoded(response){
        try {
            const decodedResponse = atob(response);
            const jsonResponse = JSON.parse(decodedResponse);
            console.log(jsonResponse);
            // localStorage.setItem('user', JSON.stringify(jsonResponse));
            localStorage.setItem('user', JSON.stringify("true"));
            setLogin(true);
            // if (jsonResponse.session_key && jsonResponse.jwt) {
            //     console.log("Successful login");
            //   } else {
            //     console.error("Error in 49:", jsonResponse);
            //   }
        } catch (error) {
            console.log("Error in 50");
        }
       
    }
    

  return (
    <div className="login-container">
    <div className="background-image"></div>
    <div className="login-form">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <h2>{login?"Logout":"Login"}</h2>
     {!login?<><input type="text" placeholder="Enter Uid" name="uid" onChange={updatedata} typeof='text' value={data.uid}/>
      <input type="password" placeholder="Enter Password" name="password" onChange={updatedata} typeof="password"  value={data.password}/></>:""}
      <button type="submit"  disabled={data.password&&data.uid?false:true} onClick={check}>Login</button>
      
      {/* <div >{login?<>
      <h4>Name:{userDefault.name}</h4>
      <h4>Enrollment_no:{userDefault.enrollment_no}</h4>
      <button  onClick={downloadPDF} style={{width:"100%",backgroundColor:"black",height:"35px"}}>Download User card as PDF</button></>:""}
      </div> */}
    </div>
    
  </div>

  );
};

export default Login;

//{"payload":"eyJ1aWQiOiJzYXRtaXMxMDAwMCIsInBhc3N3b3JkIjoiQXNkZjEyMzQjIiwiYmxvY2tlZCI6MH0=", "device":"mobile", "browser":"chrome","browser_version":1, "os":"mac"}

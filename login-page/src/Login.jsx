
import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

const Login= () => {
    const [data,setData]=useState({uid:"",password:"",blocked:0})// data will get update but to check login just default added
    const [login,setLogin]=useState(false);

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
        const apiUrl = 'https://myphysio.digitaldarwin.in/api/login_v1';
        const payload = {
            "payload": encodedPayload,
          };
          console.log(payload);
         await axios.post(apiUrl,payload).then(response => {
         console.log('Response:', response);
        //  localStorage.setItem('user', JSON.stringify(response));
        decoded(response);
        }).catch(error => {
        console.error('Error on 28 line:', error);
         });   
        } catch (error) {
            console.log("Error on 32 line",error);
        }
    }

    function decoded(response){
        try {
            const decodedResponse = atob(response);
            const jsonResponse = JSON.parse(decodedResponse);
            console.log(jsonResponse);
            localStorage.setItem('user', JSON.stringify(jsonresponse));
            setLogin(true);
            // if (jsonResponse.session_key && jsonResponse.jwt) {
            //     console.log("Successful login");
            //   } else {
            //     console.error("Error in 47:", jsonResponse);
            //   }
        } catch (error) {
            console.log("Error in 50");
        }
       
    }

    // decoded();

    const downloadPDF = () => {
      const userDetails = {
        name: "John Doe",
        fatherName: "Abcd",
        dob: "January 1, 1990",
        gender: "Male",
        photo: "https://i.pinimg.com/originals/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg",
        blood_group:"B+",
        signature: "https://pbs.twimg.com/media/D9z0TuNU4AAp6HZ?format=jpg&name=4096x4096",
        enrollment_no:"65451412154",
      }
      const pdf = new jsPDF("p", "mm", [110, 100]);
    // const pdf=new jsPDF();
    pdf.setFontSize(10);
     let offsetY = 0;
     let offsetX=0;
     console.log();
      pdf.addImage("https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_Odisha.png", "JPEG", 0, 5, 30, 30);
      pdf.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIe0E4d42KwXt6c_WZ8yFjyMOXDdrQ-gXbaidBzmQiQ&s","JPEG",33,5,60,30);
      pdf.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkUNBkPcoKNOTEradqz8QEFPhhC9afzf2Wa14gLSi&s","JPEG",55,45,40,40);
      pdf.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHcirjU8r73nJvIRVUO_gxXAsI1X-a9eYpQ4W5M32&s","JPEG",55,90,30,10);
      pdf.text(5, 48, `Name: ${userDetails.name}`);
      pdf.text(5, 56, `Father: ${userDetails.fatherName}`);
      pdf.text(5, 64, `DOB: ${userDetails.dob}`);
      pdf.text(5, 72, `Gender: ${userDetails.gender}`);
      pdf.text(5, 80, `Blood Group: ${userDetails.blood_group}`);
      pdf.text(5, 88, `Enrollment No: ${userDetails.enrollment_no}`);
      pdf.save("user_details.pdf");}

  return (
    <div className="login-container">
    <div className="background-image"></div>
    <div className="login-form">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <h2>Login</h2>
      <input type="text" placeholder="Enter Uid" name="uid" onChange={updatedata} typeof='text' />
      <input type="password" placeholder="Enter Password" name="password" onChange={updatedata} typeof="password" />
      <button type="submit"  disabled={data.password&&data.uid?false:true} onClick={!login?check:""}>{login?"Login":"Logout"}</button>
    </div>
   <>{login?<button onClick={downloadPDF} style={{width:"10%",backgroundColor:"white",height:"35px"}}>Download as PDF</button>:""}</>
    
  </div>

  );
};

export default Login;


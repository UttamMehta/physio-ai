
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
    const [data,setData]=useState({uid:"",password:"",blocked:0})// data will get update but to check login just default added
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
        const apiUrl = 'https://myphysio.digitaldarwin.in/api/login_v1';
        const payload = {
            "payload": encodedPayload,
          };
          console.log(payload);
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
        } catch (error) {
            console.log("Error on 32 line",error);
        }
    }

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
    
    // decoded();

    // const downloadPDF = () => {
    //   const userDetails=JSON.parse(localStorage.getItem("user"))||userDefault ;// default data if not receive anything from local storage
    //   userDefault=userDetails;
       

    //   const pdf = new jsPDF("p", "mm", [110, 100]);
    // // const pdf=new jsPDF();
    // pdf.setFontSize(10);
    //  let offsetY = 0;
    //  let offsetX=0;
    //  console.log();
    //   pdf.addImage("https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_Odisha.png", "JPEG", 0, 5, 30, 30);//remove this from response we get from api
    //   pdf.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIe0E4d42KwXt6c_WZ8yFjyMOXDdrQ-gXbaidBzmQiQ&s","JPEG",33,5,60,30);//remove this from response we get from api
    //   pdf.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkUNBkPcoKNOTEradqz8QEFPhhC9afzf2Wa14gLSi&s","JPEG",55,45,40,40);//remove this from response we get from api
    //   pdf.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHcirjU8r73nJvIRVUO_gxXAsI1X-a9eYpQ4W5M32&s","JPEG",55,90,30,10);//remove this from response we get from api
    //   pdf.text(5, 48, `Name: ${userDetails.name}`);// remove this from response we get from api
    //   pdf.text(5, 56, `Father: ${userDetails.fatherName}`);//remove this from response we get from api
    //   pdf.text(5, 64, `DOB: ${userDetails.dob}`);//remove this from response we get from api
    //   pdf.text(5, 72, `Gender: ${userDetails.gender}`);//remove this from response we get from api
    //   pdf.text(5, 80, `Blood Group: ${userDetails.blood_group}`);//remove this from response we get from api
    //   pdf.text(5, 88, `Enrollment No: ${userDetails.enrollment_no}`);//remove this from response we get from api
    //   pdf.save("user_details.pdf");
    // }


    // function logout(){
    //   console.log("93")
    //   setLogin(false);
    //   localStorage.removeItem('user');
    // }

  return (
    <div className="login-container">
    <div className="background-image"></div>
    <div className="login-form">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <h2>{login?"Logout":"Login"}</h2>
     {!login?<><input type="text" placeholder="Enter Uid" name="uid" onChange={updatedata} typeof='text' />
      <input type="password" placeholder="Enter Password" name="password" onChange={updatedata} typeof="password" /></>:""}
      <button type="submit"  disabled={data.password&&data.uid?false:true} onClick={check}>"Login</button>
      
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


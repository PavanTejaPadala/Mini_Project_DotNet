

//------------Create-----------------
const logurl = "http://localhost:3000/userdetails";

let Create=  async ()=>{
    await fetch(logurl,{
    method:'POST',
    body:JSON.stringify({
        user : document.getElementById("signupUsername").value,
        password: document.getElementById("signupPassword").value,
        email: document.getElementById("signupEmail").value,
        Dob:document.getElementById("signupDOB").value
    }),
    
    headers:{
        "Content-type":"application/json ; charset=UTF-8"
    }
    
    }).then(res =>res.json())
    .then(data =>console.log(data))
    .catch(err => console.log(err));
        alert("Signup successful! You can now login.");
  }
localStorage.setItem('logeduser',false);
  



//--------------Login--------------

// localStorage.setItem("dataId",0);



let dataId=0;
let respo;
let data1;
let getdata11 = async ()=> {

    respo = await fetch(logurl);
    data1 = await respo.json();
    let username = document.getElementById("loginUsername").value;
    let pass = document.getElementById("loginPassword").value;
    
    for(i in data1){
        if(username==data1[i].user && pass==data1[i].password){
            localStorage.setItem("dataId",data1[i].id);
            // alert("no");
        }
    }
    dataId=localStorage.getItem("dataId");

    // console.log(dataId);
    const foundUser = data1.find(x => x.user === username && x.password === pass);
    if (foundUser) {
        localStorage.setItem('logeduser',"true");
      alert("Successful");

      const mypage = await fetch('/HTML/audible.html');
      const mainContent = await mypage.text();

      document.documentElement.innerHTML = mainContent;
      document.getElementById("signmain").style.display = "none";
        document.getElementById("profilemain").style.display ="block";
        
    //     document.getElementById("browse").style.display="block";
        
      
    } else {
      alert("Wrong Credentials");
    }
  }


  
    
 let show = async ()=> {
    dataId=localStorage.getItem("dataId");
    respo = await axios.get(`${logurl}/${dataId}`);
    // data1 = await respo.json();

   let a= document.getElementById("d-name");
   a.innerHTML= "<b>"+"Name  :   "+"</b>" +respo.data.user;
   document.getElementById("d-email").innerHTML="<b>"+"Email-id  :   "+"</b>" +respo.data.email;
   document.getElementById("d-num").innerHTML= "<b>"+"DOB  :   "+"</b>" +respo.data.Dob;

 }

 show();






// ----------------------Update-----------------------

console.log(dataId)
    let Update= ()=>{
        dataId=localStorage.getItem("dataId");
        // alert(dataId);
        fetch(`${logurl}/${dataId}`,{
        method:'PUT',
        body:JSON.stringify({
            user : document.getElementById("changeusername").value,
            password: document.getElementById("changepassword").value,
            email: document.getElementById("changeemail").value
            
        }),
        
        headers:{
            "Content-type":"application/json ; charset=UTF-8"
        }
        }).then(res =>res.json()).then(data =>console.log(data));
        }
    
 
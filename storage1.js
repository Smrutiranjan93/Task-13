
// add event listener 
const form=document.getElementById('my-form');
form.addEventListener('submit',tolocalStorage);

function tolocalStorage(event){
event.preventDefault();
const name=event.target.name.value;
const email=event.target.email.value;
// localStorage.setItem('name',name);
// localStorage.setItem('email',email);
const obj={
    name:name,
    email:email
};
localStorage.setItem(obj.email,JSON.stringify(obj));
showNewUserOnScreen(obj);
}

//as every user don't have a particular id,all old user get replaced by new user.

//storing multiple user
// localStorage.setItem(obj.email,JSON.stringify(obj));


function   showNewUserOnScreen(user){

   const parentNode =document.getElementById('listOfUsers');
//    const childHTML=`<li id='${user.email}'>${user.name} -${user.email} 
//    <button onclick=deleteUser('${user.email}')>DeleteUser</button>
//    <button onclick=editUserDetails('${user.email}','${user.name}') >EditUser</button>
//    </li>`
    const childHTML=`<li id='${user.email}'>${user.email}-${user.name} 
    <button onclick=deleteUser('${user.email}')>DeleteUser</button>
    <button onclick=editUserDetails('${user.email}','${user.name}')>EditUser</button>
    </li>`
   parentNode.innerHTML=parentNode.innerHTML+childHTML;

}
{/* <button onclick=editUserDetails('${user.email}','${user.name}')>EditUser </button> */}

//after refreshing ,still it  will be on screen
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

// create a delete button 
// when we click the userdetails should be deleted from local storage as well as front end.

function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromTheScreen(emailId);
}

function removeUserFromTheScreen(emailId){
    const parentNode=document.getElementById('listOfUsers');
    const childNodeToBeDeleted=document.getElementById(emailId);
    parentNode.removeChild(childNodeToBeDeleted);
}

//edit user app
// onclick edit button ,call a function and pass emailid as a argument;
// -edit user details
// populate the input field 
// remove the user from local storage as well as front screen.

function editUserDetails(emailId,name){
    document.getElementById('email').value=emailId;
    document.getElementById('name').value=name;
    // document.getElementById('number').value=number;
    deleteUser(emailId);
}

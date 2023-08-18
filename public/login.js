const url='http://localhost:3000'
const login=async ()=>{
    // e.preventDefault();
    const email = document.getElementById('email');
    // let temp=[]
    // temp=localStorage.getItem('chat');
    // temp.push()
    const password = document.getElementById('password');
    const obj={
        email:email.value,
        password:password.value
    }
    try {
        const result=await axios.post(`${url}/login`,obj);
        console.log(result);
        alert(result?.data?.message)
        localStorage.setItem('token',result?.data?.token)
        location=`${url}/chat.html`
    } catch (error) {
        console.log(error);
    }
}
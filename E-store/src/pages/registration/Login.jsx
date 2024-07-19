import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from '../../components/loader/Loader'
function Login() {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, setLoading } = useContext(myContext);
    const signIp = async (e) => {
        e.preventDefault();
        if ( email === "" || password === "") {
          return toast("Must fill all fields");
        }
    
        try {
          setLoading(true);
          const users = await signInWithEmailAndPassword(auth, email, password);
          console.log(users);
         localStorage.setItem( "user", JSON.stringify(users))
    
          toast.success('Signin Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoading(false)
        //   Navigate('/')
        window.location.href='/'
    
        } catch (err) {
          console.log(err);
          setLoading(false)
        }
      };
  return (
    <div className=" flex justify-center items-center h-screen">
        {loading && <Loader />}
      <form className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email" required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password" required
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button type="submit" onClick={signIp} className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
}

export default Login;

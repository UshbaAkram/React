import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from '../../components/loader/Loader'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, setLoading } = useContext(myContext);
  const signUp = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return toast("Must fill all fields");
    }

    try {
      setLoading(true);
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "user");
      await addDoc(userRef, user);
      toast.success("Signup Succesfully");
      setLoading(false)
    //   Navigate('/')
    setName("");
    setEmail("");
    setPassword("");
    
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
    {loading && <Loader />} 
      <form onSubmit={signUp} className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="User Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg">
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
}

export default Signup;

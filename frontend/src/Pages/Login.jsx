import React, { useState } from "react";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import "./CSS/Login.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {

  const [data, setData] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setErrors({...errors, email: "Email is required"});
      console.log("Email is required");
      return;
    }
    
    if (!formData.password) {
      setErrors({...errors, password: "Password is incorrect"});
      console.log("Password is incorrect");
      return
    }

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setData(data);

      if (response.status === 200) {
        console.log(data)
        setFormData({})
        setErrors({});
      }

      if (response.status === 401) {
        if (data && data.errors) {
          setErrors(data.errors);
          console.log("Error", data.errors);
        } else {
          console.log("Unexpected error:", data);
        }

        if (data && data.errors === data.errors.passCompare) {
          setErrors({ ...errors, passCompare: data.errors.passCompare });
        }
  
        return;
      }

      
    } catch (error) {
      console.error("Error:", error.message)
    }
  };

  return (
    <div className="login">
      <MainNavbar />
      <div className="login-main">
      {data.message && <div className="text-blue-500 m-4">{data.message}</div>}
      {errors.user && <div className="text-blue-500 m-4">{errors.user}</div>}
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              LogIn
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" 
            placeholder="name@mail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />

            {errors.email && <span className="text-red-500">{errors.email}</span>}

            <Input label="Password" size="lg" 
            placeholder="********"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />

            {errors.passCompare && <span className="text-red-500">{errors.passCompare}</span>}
            {errors.password && <span className="text-red-500">{errors.password}</span>}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit" onClick={handleSubmit}>
              LogIn
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/SignUp"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;

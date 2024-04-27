import React, { useState } from "react";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import './CSS/SignUp.css'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUp = () => {

  const [data, setData] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    agreeToTerms: false,
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({...formData, [e.target.name]: value });
  }

  // To fetch sign up api from the backend
  const handleSignUp = async (e) => {

    e.preventDefault();

    if (formData.agreeToTerms === false) {
      setErrors({...errors, agreeToTerms: 'Please agree to the Terms and Conditions'});
      console.log('Please agree to the Terms and Conditions');
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setErrors({...errors, confirmpassword: 'Password do not match'});
      console.log('Password do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setData(data);

      if (response.status === 201) {
        console.log(data)
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmpassword: '',
          agreeToTerms: false,
        });
        setErrors({})
      }

      if (response.status === 400) {
        if (data && data.errors) {
          setErrors(data.errors);
          console.log("Error", data.errors);
        } else {
          console.log("Unexpected error:", data);
        }
        return;
      }
      
    } catch (error) {
      console.error('Error:', error.message);
      setErrors(error.message);
    }
  };

  return (
    <div className="signup">
      <MainNavbar />
      <div className="signup-main">
        {data.message && <div className="text-blue-500 m-4">{data.message}</div>}
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignUp}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                size="lg"
                placeholder="Full Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.password && <span className="text-red-500">{errors.password}</span>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Confirm Password
              </Typography>
              <Input
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.confirmpassword && <span className="text-red-500">{errors.confirmpassword}</span>}

            </div>
            <Checkbox
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  
                >
                  I agree the
                  <a
                    href="/"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            /> <br />
            {errors.agreeToTerms && <span className="text-red-500 text-[11px] mb-4 ">{errors.agreeToTerms}</span>} 
            <Button className="mt-6" fullWidth type="submit">
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="/Login" className="font-medium text-gray-900">
                LogIn
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;

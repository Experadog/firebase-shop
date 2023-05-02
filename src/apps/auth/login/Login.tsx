

import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Components } from '../../../components';
import { useForm } from 'react-hook-form';
import { FormsIstruents } from '../../../helpers/forms';
import { auth } from '../../../firebase/firebase';
// import { Hooks } from '../../../hooks';

import cls from "./index.module.scss";

const Login:React.FunctionComponent = () => {
  // const { actions } = Hooks.useRedirect();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit"
  });

  const handleRegister = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res: any) => {
        localStorage.setItem("accessToken", res.user.accessToken);
        console.log("SUCCESS")
        reset();
      })
  }

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.register_page}>
          <h2>Log In</h2>

          <form onSubmit={handleSubmit(handleRegister)}>
            <Components.Divider>
              <Components.TextInput 
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    message: "This area should be filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsIstruents.LengthOfvalue("max", "Email", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsIstruents.LengthOfvalue("min", "Email", 6),
                    value: 6
                  }
                })}
              />
              <Components.Errors err={errors?.email && errors.email.message} />
            </Components.Divider>
            <Components.Divider>
              <Components.TextInput 
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: {
                    message: "This area should be filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsIstruents.LengthOfvalue("max", "Password", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsIstruents.LengthOfvalue("min", "Password", 5),
                    value: 5
                  }
                })}
              />
              <Components.Errors err={errors?.password && errors.password.message} />
            </Components.Divider>
            <Components.Divider>
              <Components.AuthSubmit location="Log In" />
            </Components.Divider>
            <Components.Divider>
              <Components.AuthNavigate location="signIn" />
            </Components.Divider>
            <Components.Divider>
              <Components.AuthGoogle location="signIn" />
            </Components.Divider>
          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Login;

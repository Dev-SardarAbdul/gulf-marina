import { useForm } from "react-hook-form";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function Formik() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Login Form</h1>
        <br />

        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />

        {/* <p style={{ color: "red" }}>{errors.email?.message}</p> */}

        <br />

        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        {/* <p style={{ color: "red" }}>{errors.password?.message}</p> */}

        <br />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Formik;

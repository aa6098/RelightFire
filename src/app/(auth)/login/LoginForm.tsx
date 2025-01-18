"use client";
import { loginSchema, LoginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };
  return (
    <Card className="md:w-2/5 w-max mx-0 md:mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center text-indigo-700">
          <FaLock size={30} />
          <h1 className="text-3xl font-semibold">Login</h1>
        </div>
        <p className="text-neutral-500">Welcome Back to RelightFire.</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              fullWidth
              isDisabled={!isValid}
              className={`${
                !isValid ? "bg-gray-700" : "bg-indigo-700"
              } text-white font-bold`}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default LoginForm;

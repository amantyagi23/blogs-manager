import { Button } from '@/shared/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { toast } from '@/shared/components/ui/use-toast'
import { UserContext } from '@/shared/lib/providers/UserProvider'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface ISignUpForm {
    email: string,
    password: string
}



const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm<ISignUpForm>()


    const onSubmit = async (data: ISignUpForm) => {
        try {
            reset()
            await user?.registerUser(data.email, data.password);
            toast({
                title: "User Register Successful",
                description: new Date().toISOString()
            })
            navigate("/login")

        } catch (error: unknown) {
            toast({
                title: `Error !`,
                description: `${error}`,
            })
        }

    }
    return (
        <>
            <div className='flex justify-center items-center w-full h-screen'>
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your email below to create to your account.
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required {...register("email", { required: true })} />
                                {errors.email && <>Please Enter Email</>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required  {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-500'>Please Enter Password</span>}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Register</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default SignUpPage
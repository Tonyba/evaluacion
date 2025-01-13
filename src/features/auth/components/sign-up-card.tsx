"use client";

import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { DotterSeparator } from '@/components/dotted-seperator';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

import {

    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage

} from "@/components/ui/form";


import { Input } from '@/components/ui/input';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

import { registerSchema } from "../schemas";
import { useRegister } from "../api/use-register";



export const SignUpCard = () => {

    const { mutate, isPending } = useRegister();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof registerSchema> ) => {
        mutate({json: values});
    }

    return (
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'> 

            <CardHeader className='flex items-center justify-center text-center p-7 pb-1'>

                <CardTitle className='text-2xl' >Sign Up</CardTitle>

            </CardHeader>

            <CardDescription className='text-center mb-4'>
                By signing up, you aggre to our{" "}
                <Link href="/privacy" >
                    <span className='text-blue-700'>Privacy Policy</span>
                </Link>
                and {" "}
                <Link href="/terms" >
                    <span className='text-blue-700'>Terms of Service</span>
                </Link>
            </CardDescription>

            <div className="px-7">
                <DotterSeparator />
            </div>

            <CardContent className='p-7' >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>  

                <FormField name="name" control={form.control} render={({field}) => (
                    <FormItem>
                        <FormControl>

                            <Input 
                                 {...field}
                                type='text'
                                placeholder='Enter Name'
                            />

                        </FormControl>
                        <FormMessage />
                        
                    </FormItem>
                    
                )} ></FormField>

                  


                <FormField name="email" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>

                                    <Input 
                                        {...field}
                                        type='email'
                                        placeholder='Enter Email Address'
                                    />

                                </FormControl>
                                <FormMessage />
                                
                            </FormItem>
                          
                )} ></FormField>

                        
                <FormField name="password" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormControl>

                                    <Input 
                                        {...field}
                                        type='password'
                                        placeholder='Enter password'
                                    />

                                </FormControl>
                                <FormMessage />
                                
                            </FormItem>
                          
                        )} ></FormField>

                        <Button type='submit' size="lg" className='w-full' disabled={isPending}>Register</Button>
                    </form>
                </Form>
           
            </CardContent>
            <div className="px-7">
                     <DotterSeparator />
            </div>
            <CardContent  className='p-7 flex flex-col gap-y-4' >

                <Button size="lg"  variant="secondary" className='w-full' disabled={isPending}>
                    <FcGoogle className='mr-2 size-5' />
                    Sign Up with Google</Button>
                <Button size="lg"  variant="secondary" className='w-full' disabled={isPending}>
                    <FaGithub className='mr-2 size-5' />
                    Sign Up with Github
                    </Button>


            </CardContent>

            <div className="px-7">
             <DotterSeparator/>         
            </div>

            <CardContent className="p-7 flex items-center justify-center">
                <p>Already have an account?    <Link className="text-blue-700" href="/sign-in">
                    Sign In
                </Link></p>
             
            </CardContent>

        </Card>
    );

}

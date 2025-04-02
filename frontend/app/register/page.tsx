"use client";

import InputField from "@/app/components/atoms/InputField";
import Button from "@/app/components/atoms/Button";
import Card from "@/app/components/atoms/Card";
import {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    // TODO Task 3.2: Keep track of the form input (username, password).
    //  - You can use the the React `useState` hook for this: https://react.dev/reference/react/useState
    //  - Implement the handleChange function to update the state when the input changes. Hint: you can use the `onChange` prop of the InputField component.
    //  - Optional: if you're already finished with Task 3, take a look at the `useForm` hook to see how we can simplify form handling: https://react-hook-form.com/docs/useform

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // TODO: Implement state update
    };

    // TODO Task 3.3: Implement the registration form submission.
    //  - This function handles the form submission event. What is the default event that is triggered when a form is submitted, and how can we prevent it?
    //  - Use the fetch API to send a POST request to the "server" - specifically, the register endpoint in our Python backend. Where is the handleSubmit function executed, and what is therefore the server address?
    //  - Use a header to specify that the content type is JSON.
    //  - Encode the user input as JSON in the format that our Python backend expects.
    //  - Handle the response from the server. What should happen if the request was successful? What should happen if the request failed?
    //  - Store the token. Where / how should we store the token?
    //  - Verify that the token was stored correctly by looking in your browser's developer tools.
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // const ... = await fetch(...);
    };

    // TODO Task 3.1: Implement the registration form.
    //  - Use an HTML form element to create a registration form.
    //  - Use the InputField component to create input fields for "username" and "password" (the component is already imported at the top of this file).
    //  - Inspect the InputField component under frontend/app/components/atoms/InputField.tsx and find out how it works. How can we modify the password input so that we can only see dots instead of the actual password?
    //  - Use the Button component to create a submit button.
    //  - Capture the form submit (`onSubmit`) event and call our custom `handleSubmit` function, which you will implement in the next step.
    //  - Optional: Add some styling to the form. You may use tailwind or plain CSS - check out the Card, Button, and InputField components for your reference.
    return <div>Registration Page</div>;
}

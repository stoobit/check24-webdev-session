"use client";

import {useEffect, useState} from "react";
import {authenticatedFetch} from "@/app/utils/authentication";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const [message, setMessage] = useState(undefined);

    useEffect(() => {
        authenticatedFetch("http://localhost:5001/get_example")
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => {
                console.error(error)
                router.push("/login")
            });
    });

    return (
        <div>
            <h1>Shop</h1>
            {message && <p>{message}</p>}
        </div>
    );
}

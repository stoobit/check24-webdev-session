"use client";

import {useEffect, useState} from "react";
import {authenticatedFetch} from "@/app/utils/authentication";

export default function Page() {
    const [message, setMessage] = useState(undefined);

    useEffect(() => {
        authenticatedFetch("http://localhost:5000/get_example")
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error(error));
    });

    return (
        <div>
            <h1>Shop</h1>
            {message && <p>{message}</p>}
        </div>
    );
}

"use client";

import InputField from "@/app/components/atoms/InputField";
import Button from "@/app/components/atoms/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { storeToken } from "../utils/authentication";

export default function Page() {
    const router = useRouter();

    const [error, setError] = useState(false);
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:5001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();  
            })
            .then(data => {
                storeToken(data.token)
                router.push("/shop")
            })
            .catch(error => {
                setError(true)
            });
    };

    return <center style={{ padding: "20px" }}>
        <div style={{ width: "200px" }}>
            <form onSubmit={handleSubmit}>
                <div style={{ textAlign: "left", width: "200px" }}>
                    <label htmlFor="username">Benutzername</label>
                </div>
                <div style={{ height: "55px" }}>
                    <InputField title="Username" id="username" autoComplete="true" onChange={handleChange}></InputField>
                </div>

                <div style={{ textAlign: "left", width: "200px" }}>
                    <label htmlFor="password">Passwort</label>
                </div>
                <div style={{ height: "80px" }}>
                    <InputField title="Passwort" type="password" id="password" onChange={handleChange}></InputField>
                </div>

                <Button type="submit">
                    <div style={{ width: "200px" }}>
                        Registrieren
                    </div>
                </Button>

                <div>
                    {error ?
                        (<div style={{
                            width: "220px",
                            paddingTop: "20px",
                            textAlign: "center",
                            color: "red"
                        }}>
                            <p>Fehlgeschlagen.</p>
                        </div>)
                        :
                        (<div></div>)
                    }
                </div>
            </form>
        </div>
    </center>
}

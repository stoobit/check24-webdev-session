import Link from "next/link";

export default function Home() {
    /**
     * TODO (homework): Add a shop page, where only logged in users can see the products.
     */

    /**
     * TODO (homework): Style the Link elements to look like our button.
     */

    /**
     * TODO (homework): Make the website more appealing using CSS (plain or via Tailwind) and JavaScript (or TypeScript).
     */

    return (
        <center>
            <div className="flex flex-col gap-4" style={{ width: "200px", padding: "20px" }}>
                <div style={{ width: "200px" }}>
                    <h1 style={{fontSize: "22px", fontWeight: "bold"}}>Wilkommen</h1>
                </div>

                <div className="flex flex-col items-start">
                    <Link href="/register" className="bg-blue-900 text-white p-2 rounded" style={{ width: "200px" }}>Registrieren</Link>
                    <div style={{ height: "10px" }}></div>
                    <Link href="/login" className="bg-blue-900 text-white p-2 rounded" style={{ width: "200px" }}>Einloggen</Link>
                </div>
            </div>
        </center>
    )
}

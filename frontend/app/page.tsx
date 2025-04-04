import Link from "next/link";

export default function Home() {
    return (
        <center>
            <div className="flex flex-col gap-4" style={{ width: "200px", padding: "20px" }}>
                <div style={{ width: "200px" }}>
                    <h1 style={{fontSize: "22px", fontWeight: "bold"}}>Wilkommen</h1>
                </div>

                <div className="flex flex-col items-start">
                    <Link href="/shop" className="bg-blue-900 text-white p-2 rounded" style={{ width: "200px" }}>Shoppen</Link>
                    <div style={{ height: "10px" }}></div>
                    <Link href="/register" className="bg-blue-900 text-white p-2 rounded" style={{ width: "200px" }}>Registrieren</Link>
                </div>
            </div>
        </center>
    )
}

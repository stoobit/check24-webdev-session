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
        <div className="flex flex-col gap-4">
            <h1>Welcome to the CHECK24 Shop!</h1>

            <div className="flex flex-col items-start">
                <Link href="/register">Register here</Link>
                <Link href="/login">Login here</Link>
            </div>
        </div>
    )
}

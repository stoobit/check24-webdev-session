interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="border-2 border-gray-200 p-4 rounded">
            {children}
        </div>
    );
}
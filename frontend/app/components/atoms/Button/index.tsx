interface ButtonProps {
    type?: "button" | "submit";
    children: React.ReactNode;
}

export default function Button({ type = "button", children }: ButtonProps) {
   return (
       <button type={type} className="bg-blue-900 text-white p-2 rounded">{children}</button>
   );
}
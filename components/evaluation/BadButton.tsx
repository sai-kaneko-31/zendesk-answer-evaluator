"use client";

interface BadButtonProps {
    onClick: () => void;
}

const BadButton = ({ onClick }: BadButtonProps) => {
    return (
        <button
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-150"
            type="submit"
            onClick={onClick}
        >
            👎</button>
    );
}
export default BadButton;
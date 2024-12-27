export function Button({ text }: { text: string }) {
    return (
        <button className="bg-purple-600 text-center px-12 py-2 text-white rounded-xl hover:bg-purple-500">
            {text}
        </button>
    )
};


export function Container({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col justify-between">
            {children}
        </section>
    )
};

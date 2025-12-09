export default function MenuItem({ name, price, description }) {
    return (
        <div className="mb-[22px]">
            <div className="flex justify-between text-base font-semibold mb-[2px]">
                <div>{name}</div>
                <div className="text-[var(--gold)] font-medium">{price}</div>
            </div>
            <div className="text-sm text-[#555]">{description}</div>
        </div>
    );
}


interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className="col-span-12 mb-10">
			<hr className="bg-gray-800" />
			<div className="flex justify-between items-center">
				<h2 className="bg-gray-800 font-semibold p-2 text-lg w-fit">{title}</h2>

			</div>
        </div>
    );
}

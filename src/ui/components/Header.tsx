interface HeaderProps {
    searchValue: string
    setSearchValue: (e: string) => void
}

export default function Header(props: HeaderProps): JSX.Element {
    const { searchValue, setSearchValue } = props
    return (
        <header className="bg-slate-700 w-full flex h-16 items-center justify-between px-4">
            <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
                <h1 className="text-1xl font-bold tracking-tight text-gray-100">Flix Films</h1>
                <label className="relative block w-full max-w-xs">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Pesquisar pelo nome"
                        type="text"
                        name="search"
                    />
                </label>
            </div>
        </header>
    )

}
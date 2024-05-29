
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
    searchValue: string
    setSearchValue: (e: string) => void
}

export default function Header(props: HeaderProps): JSX.Element {
    const { searchValue, setSearchValue } = props
    const navigation = useNavigate()
    const handleSubmit = () => {
        const title = searchValue
        navigation(`/results/${title}`)
    };
    const goToHome = () => {
        navigation("/")
    };
    return (
        <header className="bg-transparent w-full flex h-16 items-center justify-between px-4 cursor-pointer">
            <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
                <h1 onClick={goToHome}  className="text-2xl font-bold tracking-tight text-red-600">Flix Films</h1>
                <form
                    className='flex items-center space-x-4'
                    onSubmit={handleSubmit}
                >
                    <input
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        className="placeholder:italic placeholder:text-gray-400    block bg-white w-full border border-gray-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm"
                        placeholder="Pesquisar pelo nome"
                        type="text"
                        name="search"
                    />

                    <button
                        className='bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed'
                        disabled={searchValue === ''}
                    >
                        Pesquisar
                    </button>
                </form>
            </div>
        </header>
    )

}
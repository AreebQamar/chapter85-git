import Link from 'next/link'


export default function CatogoryList({categories, handleCloseList, handleShowList }) {
    
    // const hideDropdown = () => {
    //     delayTimer = setTimeout(() => {
    //         setIsDropdownOpen(false);
    //     }, 200);
    // };
    const handleMouseEnter = () => {
        handleShowList
    };

    const handleMouseLeave = () => {
        handleCloseList();
    };



    return (
        <div onClick={handleCloseList}>
            <div className="absolute right-1/2 top-full mt-1 w-42 bg-white border border-gray-300 bg-opacity-85 rounded-md shadow-lg z-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ul className="p-2">
                    {
                        categories.map((category, index) => (
                            <li key={index} className="py-1">
                                {
                                    <Link key={category._id} href={`/category/${category.name}`} className="block px-4 py-2 hover:bg-gray-200">
                                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                    </Link>
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
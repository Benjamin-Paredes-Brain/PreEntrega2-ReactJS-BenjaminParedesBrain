import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import withItemData from "../Item/withItemData";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SearchBar = withItemData(({ itemData }) => {
    const [searchItems, setSearchItems] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchBarRef = useRef(null);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSearchItems = (e) => {
        const newSearchText = e.target.value.toUpperCase();
        setSearchText(newSearchText);
        setSearchItems(
            itemData.filter((item) =>
                item.title.toUpperCase().includes(newSearchText)
            )
        );
    };

    const handleRedirect = (e) => {
        searchText.length === 0 
        ? e.preventDefault() 
        : navigate(`/all-results/${searchText}`);
        handleOptionClick();

    };

    const handleOutsideClick = (e) => {
        if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
            setIsSearchOpen(false);
        }
    };

    const handleOptionClick = () => {
        setIsSearchOpen(false);
        setSearchText("");
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className="searchBar_container" ref={searchBarRef}>
            <form className="searchBar_form">
                <input
                    className="searchBar_input"
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onFocus={() => setIsSearchOpen(true)}
                    onChange={handleSearchItems}
                />
                <button className="searchBar_button" onClick={handleRedirect}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>

            {isSearchOpen && searchText.length > 0 && (
                <div className="searchResults_container">
                    {searchItems.length > 0 && (
                        <ul className="searchResults_list">
                            {searchItems.slice(0, 4).map((item) => (
                                <Link className="searchResults_link" to={`/detail/${item.id}`} key={item.id}>
                                    <li className="searchResults_item" onClick={handleOptionClick}>
                                        <img className="searchResults_img" src={item.pictureURL} alt={item.title} />
                                        <div className="searchResults_info">
                                            <p className="searchResults_title">{item.title}</p>
                                            <p className="searchResults_price">${item.price}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                            {searchItems.length > 0 && (
                                <Link className="all_searchResults" to={`/all-results/${searchText}`} onClick={handleOptionClick}>View all results</Link>
                            )}
                        </ul>
                    )
                    }
                </div>
            )}
        </div>
    );
});

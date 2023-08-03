import React, { useState } from "react";
import { MenuItems } from "../models/MenuItems";
import { Menu } from "./Menu";


const searchItem = (query, array) => {
    if (!array?.length) return [];

    return JSON.parse(JSON.stringify(array)).filter(el => {
        el.children = searchItem(query, el?.children);
        return el.title.toUpperCase().indexOf(query.toUpperCase()) >= 0 || !!el.children.length
    });
}

export const MenuWithSearch = ({ pageId }) => {
    const ref = React.useRef(null);
    const [className, setClassName] = useState('menu-search');
    const [query, setQuery] = useState('menu-search');
    const [menuItems, setItems] = useState(MenuItems);

    const onSearch = (value) => {
        setQuery(value);
        setItems(!value ? MenuItems : searchItem(value, MenuItems));
    }

    return (
        <div className='aside-menu' key='aside-menu'>


            <Menu pages={menuItems} activeId={pageId} query={query} />
        </div>
    );
};
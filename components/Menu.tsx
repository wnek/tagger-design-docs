import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import React from "react"
import {cs} from "react-notion-x";


const mapId = (id) => id?.replace(/-/g, '');
const areEqualIds = (id1, id2) => mapId(id1) === mapId(id2)

const getHighlightedTitle = (query, title) => {
    if (!query) return title;
    const index = title.toUpperCase().indexOf(query.toUpperCase());
    return index >= 0 ? (
        <span>{title.slice(0, index)}<b>{title.slice(index, index + query.length)}</b>{title.slice(index + query.length, title.length)}</span>
    ) : title;
}

const MenuItem = ({pages, index, activeId, query}) => {
    return (
        <div>
            {pages.map((parent, i) => {
                return (
                    <div key={parent.title} style={{paddingLeft: index * 24 + 'px'}}>
                        <a
                            className={cs('aside-menu-item', areEqualIds(activeId, parent.id) && 'active', !!parent.children?.length && 'parent')}
                            href={mapId(parent.id)}>
                            <div className={'aside-menu-item--title'}>
                                <span>{getHighlightedTitle(query, parent.title)}</span>
                            </div>
                            {(parent && parent.children?.length ?
                                <FontAwesomeIcon icon={faChevronDown} size={'xs'} style={{width: '16px'}}/> : null)}
                        </a>
                        <div>
                            {parent.children &&
                                <MenuItem pages={parent.children} index={index + 1} activeId={activeId} query={query}/>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const Menu = ({activeId, pages, query}) => {
    return (
        <div>
            <MenuItem pages={pages} index={0} activeId={activeId} query={query}/>
        </div>
    )
}

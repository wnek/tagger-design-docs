import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from "react"
import {cs, PageIcon} from "react-notion-x";


const MenuItem = ({pages, index}) => {
    return (
        <div>
            {(pages ?? []).map((parent, i) => {
                return (
                    <div key={parent.title} style={{paddingLeft: index * 24 + 'px'}}>
                        <a className={cs('aside-menu-item', parent.active && 'active')}
                           href={parent.id}>
                            <div className={'aside-menu-item--title'}>
                                {parent.icon && (
                                    <PageIcon className='icon' block={parent.block}/>
                                )}
                                <span>{parent.title}</span>
                            </div>
                            {(parent.children?.length ?
                                <FontAwesomeIcon icon={faChevronRight} size={'sm'}/> : null)}
                        </a>
                        <div>
                            {parent.children && <MenuItem pages={parent.children} index={index + 1}/>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const Menu = ({recordMap, id, pages, rootOnly}) => {
    if (!pages) return (<></>)

    return (
        <div className='aside-menu' key='aside-menu'>
            <MenuItem pages={pages} index={0}/>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'
import PAGES from '../config/pages.json'
import { PageNav } from '../models/pages';

function Header() {
    const [pageGroups, setPageGroups] = useState<PageNav[] | null>(null);
    useEffect(() => {
        setPageGroups(PAGES as PageNav[]);
        return () => {
        }
    }, [])

    const handleItemClick = () => {

    }

    return (
        <Menu vertical>
        {pageGroups?.map(pg => (
            <Menu.Item key={pg.url}>
                <Menu.Header>{pg.name}</Menu.Header>
                <Menu.Menu>
                    {pg.docs.map(doc => (
                        <Link href={`${pg.url}/${doc}`}>
                            <Menu.Item
                            key={`${pg.url}/${doc}`}
                            name={doc}
                            active={true}
                            onClick={handleItemClick}
                            />
                        </Link>
                    ))}
                </Menu.Menu>
          </Menu.Item>
        ))}
      </Menu>
    )
}

export default Header

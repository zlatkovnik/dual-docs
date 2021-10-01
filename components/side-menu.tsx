import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Accordion, AccordionTitleProps, Icon } from 'semantic-ui-react'
import { PageNav } from '../models/pages';
import pagesConfig from '../config/pages.json'

function SideMenu() {
    const [active, setActive] = useState<string | null>(null);
    const [docGroups, setDocGroups] = useState<PageNav[] | null>(null);

    useEffect(() => {
        // @ts-ignore
        setDocGroups(pagesConfig);
        return () => {
        }
    }, [])

    const handleCollapse = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, { index } : AccordionTitleProps) => {
        if(active === index){
            setActive(null);
        }
        else{
            setActive(index as string);
        }
    }

    let counter = 0;

    return (
        <Accordion styled>
            {docGroups?.map(dg => (
                <div key={dg.url}>
                    <Accordion.Title active={active === dg.name} index={dg.name} onClick={handleCollapse}>
                        <Icon name='dropdown' />
                        {dg.name}
                    </Accordion.Title>
                    <Accordion.Content active={active === dg.name}>
                    <>
                    {dg.docs.map(doc => (<Link key={counter++} href={`${dg.url}/${doc}`}>{doc}</Link>))}
                    </>
                    </Accordion.Content>
                </div>
            ))}
        </Accordion>
    )
}

export default SideMenu

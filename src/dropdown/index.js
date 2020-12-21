import {
    useState,
    useRef,
    useEffect,
 } from 'react'

import {
    MenuContainer,
    MenuTrigger,
    Menu,
    ListItem,
    UnorderedList,
} from './style.js'
import themes from '../page/themes'

export const DropdownMenu = (props) => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    useEffect(() => {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        }
        
        // If the item is active (ie open) then listen for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent)
        }
        
        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
        
    }, [isActive])

    const getThemeOptions = () => {
        const options = []
        for (const key in themes) {
            options.push(
                <ListItem onClick={() => props.setTheme(themes[key])} key={key}>
                    {themes[key].name}
                </ListItem>
            )
        }
        return options
    }
  
    return (
        <MenuContainer className="menu-container">
            <MenuTrigger onClick={onClick} className="menu-trigger">
                <span>Themes</span>
            </MenuTrigger>
            <Menu ref={dropdownRef} isActive={isActive}>
                <UnorderedList>
                    { getThemeOptions() }
                </UnorderedList>
            </Menu>
        </MenuContainer>
    )
}


export default DropdownMenu
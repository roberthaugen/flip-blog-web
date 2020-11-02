import hightlight from 'highlight.js'
import { createRef, useEffect } from 'react'
import { findDOMNode } from 'react-dom'


const HightlightCode = ({children, language }) => {
    const code = createRef();

useEffect(() => {
    hightlight.highlightBlock(findDOMNode(code.current));
}, [])

    return (
        <pre>
            <code
            ref={code} 
            className={language}>
            {children}
            </code>
        </pre>
    )
}


export default HightlightCode;
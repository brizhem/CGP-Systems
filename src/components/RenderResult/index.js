import React from "react";
import { useSelector } from 'react-redux';

const RenderResult = () => {
    const blocks = useSelector((state) => state.blocks);
    console.log('blocks', blocks);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}>
                {blocks.map((block) => (
                    block.content
                ))}
            </div>
        </div>
    )
}

export default RenderResult;
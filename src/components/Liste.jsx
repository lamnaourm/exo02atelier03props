
function Liste({elements}) {
    return <ul>
        {elements.map(e => 
            <li key={e.id} style={{color:e.completed && 'green' }}>{e.id} - {e.text}</li>
            )}
    </ul>;
}

export default Liste;

function Liste({elements}) {
    return <ul>
        {elements.map(e => 
            <li key={e.id}>{e.id} - {e.text}</li>
            )}
    </ul>;
}

export default Liste;
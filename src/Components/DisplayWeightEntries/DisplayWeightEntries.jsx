const DisplayWeightEntries = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Weight</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {

                return (
                    <tr key={index}>
                        <td>{entry.weight}</td>
                        <td>{entry.date}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
     );
}
 
export default DisplayWeightEntries;
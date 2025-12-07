import React, { useState } from 'react';


function List({ list }){
    return(
        <table>
            {
                list.map( listItem => (
                    <tr>
                        <td>{listItem.name}</td>
                    </tr>
                ) )
            }
        </table>
    );
}

export default List;
import React, { useState } from 'react';


function List({ list }){
    return(
        <table>
            {
                list.map( listItem => (
                    <tr>
                        <td>{listItem.title.rendered}</td>
                    </tr>
                ) )
            }
        </table>
    );
}

export default List;
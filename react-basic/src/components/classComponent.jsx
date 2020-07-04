import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();

    }


    render() {
        let array = ['Aman', 'Nabeel', 'Hamza', 'Raza'];
        let list = []
        for (let i = 0; i < array.length; i++) {
            list.push(array[i])
        }
        return (
            <table>
                <thead>
                    <th>Names</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{list}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ClassComponent
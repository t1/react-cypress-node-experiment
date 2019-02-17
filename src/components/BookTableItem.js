import React from "react";
import Link from "react-router-dom/es/Link";

const BookTableItem = ({book, children}) =>
    <tr>
        <td>{book.id}</td>
        <td>
            {children}
            {book.author}
        </td>
        <td>
            <Link to={'/books/' + book.id}>{book.title}</Link>
        </td>
    </tr>;

export default BookTableItem;

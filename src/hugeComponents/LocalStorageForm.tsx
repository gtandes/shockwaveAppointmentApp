'use client';

import React, { FC, useState, useEffect } from 'react';

// getting the values of local storage
const getDatafromLS = () => {
	const data = localStorage.getItem('books');
	if (data) {
		return JSON.parse(data);
	} else {
		return [];
	}
};

interface LocalStorageFormProps {}

const LocalStorageForm: FC<LocalStorageFormProps> = ({}) => {
	// main array of objects state || books state || books array of objects
	const [books, setbooks] = useState(getDatafromLS());

	// input field states
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [isbn, setIsbn] = useState<string>('');

	// form submit event
	const handleAddBookSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// creating an object
		let book = {
			title,
			author,
			isbn,
		};
		setbooks([...books, book]);
		setTitle('');
		setAuthor('');
		setIsbn('');
	};

	// delete book from LS
	const deleteBook = (isbn: string) => {
		const filteredBooks = books.filter((element: { isbn: string }) => {
			return element.isbn !== isbn;
		});
		setbooks(filteredBooks);
	};

	const View = ({ books, deleteBook }) => {
		return books.map((book) => (
			<tr key={book.isbn}>
				<td>{book.isbn}</td>
				<td>{book.title}</td>
				<td>{book.author}</td>
				<td className='delete-btn' onClick={() => deleteBook(book.isbn)}>
					<Icon icon={trash} />
				</td>
			</tr>
		));
	};

	// saving data to local storage
	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);

	return (
		<div className='wrapper'>
			<h1>BookList App</h1>
			<p>Add and view your books using local storage</p>
			<div className='main'>
				<div className='form-container'>
					<form
						autoComplete='off'
						className='form-group'
						onSubmit={handleAddBookSubmit}>
						<label>Title</label>
						<input
							type='text'
							className='form-control'
							required
							onChange={(e) => setTitle(e.target.value)}
							value={title}></input>
						<br></br>
						<label>Author</label>
						<input
							type='text'
							className='form-control'
							required
							onChange={(e) => setAuthor(e.target.value)}
							value={author}></input>
						<br></br>
						<label>ISBN#</label>
						<input
							type='text'
							className='form-control'
							required
							onChange={(e) => setIsbn(e.target.value)}
							value={isbn}></input>
						<br></br>
						<button type='submit' className='btn btn-success btn-md'>
							ADD
						</button>
					</form>
				</div>

				<div className='view-container'>
					{books.length > 0 && (
						<>
							<div className='table-responsive'>
								<table className='table'>
									<thead>
										<tr>
											<th>ISBN#</th>
											<th>Title</th>
											<th>Author</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
										<View books={books} deleteBook={deleteBook} />
									</tbody>
								</table>
							</div>
							<button
								className='btn btn-danger btn-md'
								onClick={() => setbooks([])}>
								Remove All
							</button>
						</>
					)}
					{books.length < 1 && <div>No books are added yet</div>}
				</div>
			</div>
		</div>
	);
};

export default LocalStorageForm;

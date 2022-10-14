import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import "./header.css"
import { Search } from 'react-bootstrap-icons';
import { useRef } from 'react';




export default function HeaderNavigation(props) {

    const inputRef = useRef(null);

    const performSearch = (e) => {
        e.preventDefault();
        window.location.href = `/?search=${encodeURIComponent(inputRef.current.value)}`
    };
    

    return (
        <Navbar className="shop-navbar" expand="lg" fixed="top">
            <Navbar.Brand className="brand-title" href="/">Product Shop</Navbar.Brand>
                   
                   <Form className="search-bar" onSubmit={performSearch}>
                    <Form.Control className="search-feature" aria-label="Search" type="search" placeholder="Search" ref={inputRef} />
                    <Button className="search-button" type="submit">
                        <Search className="search-icon" />
                        Search
                    </Button>
                </Form>
        </Navbar>
        
    );
}

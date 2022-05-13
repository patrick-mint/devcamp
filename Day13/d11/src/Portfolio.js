function Portfolio() {
    return (
        <>
            <div className="flex-container" >
                <div >
                    <img className="photo"  src="https://images.unsplash.com/photo-1652197620569-b25b6d3d73a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="me"/> 
                </div> 
                <div >
                    My Appication
                </div> 
                <div className="center">
                    <input type="search" placeholder="Search Product" />
                </div>
                <div className="center"> 
                    <button type="button" className="btn btn-primary">Search</button>
                </div>
                <div className="center">
                    <a href="www.google.com">New Product</a>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
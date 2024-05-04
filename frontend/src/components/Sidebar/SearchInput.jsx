const SearchInput = () => {
    const submit = async (event) => {
        event.preventDefault();
        const storedUserData = localStorage.getItem('currentUser');
        const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
        // console.log(currentUser);
        const number = document.getElementById('number').value;
        if (number === currentUser.mob_number) {
            alert("Cannot add yourself")
        }
        else {
            if (number.length !== 10) {
                alert("Add a number of 10 digits")
            }
            else {
                const obj = {
                    user_number: currentUser.mob_number,
                    add_number: number
                }
                // console.log(obj);
                try {
                    const response = await fetch("http://localhost:3000/add-contact", {
                        method: "POST",
                        body: JSON.stringify(obj),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    // console.log("response",response)
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
    return (
        <div> {/* Set width to full */}
            <form className="flex items-center">
                <input type="text" placeholder="Contact Number" className="flex-1 input input-bordered rounded-l-full" id="number" /> {/* Use flex-1 to fill the available width */}
                <button onClick={submit} type="submit" className="btn btn-circle bg-sky-500 text-white rounded-r-full"> {/* Use rounded-r-full to match the button with input */}
                    Add
                </button>
            </form>
        </div>
    )
}

export default SearchInput
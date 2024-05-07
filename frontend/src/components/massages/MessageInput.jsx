import { useContext } from "react";
import { MessagesContext } from "../../hooks/MessageContext";

const MessageInput = () => {
    const { setSelectedConversation } = useContext(MessagesContext);
    const { setCurrentConversation, currentConversation } = useContext(MessagesContext);
    const storedUserData = localStorage.getItem('currentUser');
    const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
    const apiKey = "c3ccb5de5246b545ad54";
    async function getTranslation(text, sourceLang, targetLang) {
        const url = `https://mymemory.translated.net/api/get?q=${text}&langpair=${sourceLang}|${targetLang}&mt=1&from=react-app&lang=${sourceLang}&uid=${apiKey}`;
        const t_msg = await fetch(url);
        return t_msg;
    }
    const clicked = async (event) => {
        // console.log(currentConversation);
        event.preventDefault();
        let contents = document.getElementById("content").value
        if (contents === '') {
            alert("The message is empty.")
        }
        else {
            let translated_content;
            if (currentUser.language === currentConversation.language) {
                translated_content = contents;
            }
            else {
                translated_content = await getTranslation(contents, currentUser.language, currentConversation.language);
            }
            let obj = {
                sender_no: currentUser.mob_number,
                receiver_no: currentConversation.associated_no,
                content: contents,
                translated_content: translated_content
            }
            // console.log(obj);
            try {
                const response = await fetch("/add-message", {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const resData = await response.json();
                // console.log("res data", resData);
                setSelectedConversation(resData)
            } catch (error) {
                // console.log(error);
            }
        }
    }
    return (
        <div className="w-full">
            <form className="px-4 my-3">

                <input
                    type="text"
                    id="content"
                    placeholder={`Send message to ${currentConversation ? currentConversation.username : ""}`}
                    className=" input input-bordered rounded-full" />

                <button onClick={clicked} type="submit" className="btn btn-circle bg-sky-500 text-white">
                    Send
                </button>
            </form>
        </div>
    );
};
export default MessageInput;

import styled from "styled-components";

export const Contact=()=>{
    const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, #007bff, #6610f2);
    color: white;
    padding: 2rem;
  
    .Main-heading {
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  
    .container {
      width: 90%;
      max-width: 500px;
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }
  
    .contact-form form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    input,
    textarea {
      width: 100%;
      padding: 0.8rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      outline: none;
      transition: 0.3s;
    }
  
    input::placeholder,
    textarea::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  
    input:focus,
    textarea:focus {
      background: rgba(255, 255, 255, 0.3);
    }
  
    .button {
      background: #ff7f50;
      color: white;
      padding: 0.8rem;
      border: none;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      text-transform: uppercase;
      font-weight: bold;
    }
  
    .button:hover {
      background: #ff4500;
    }
  `;
    return(
        <Wrapper className="body">
           <h2 className="Main-heading">Contact With Rohit Kalsi</h2>
           <div className="container">
            <div className="contact-form">
                <form action="https://formspree.io/f/xkgobzjj" method="POST">
                    <input type="text"
                    name="username"
                    placeholder="Enter the Username"
                    autoComplete="off"
                    required
                     />

                    <input type="email"
                    name="Email"
                    placeholder="Enter the Email"
                    autoComplete="off"
                    required
                     />

                   <textarea name="message" cols="30" rows="6" autoComplete="off"
                    required>

                   </textarea>
                   <input type="submit" value="send"   className="button"/>
                </form>
            </div>
           </div>
        </Wrapper>
    )
}
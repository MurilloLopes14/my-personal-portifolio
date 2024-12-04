//* Styles
import { ContactStyle } from "./ContactStyle";

//* Hooks
import { useRef, useState } from "react";

//* Components
import { Map } from "../Map/Map";

//* EmailJS
import emailjs from "@emailjs/browser";

type Props = {};

export const Contact = (props: Props) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);

  const form: any = useRef();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);

    const sendEmail = await emailjs
      .sendForm(
        "service_1zrq1tf",
        "template_uzryevt",
        form.current,
        "0UutIGondsGsc3Cpa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(false);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );

    setTimeout(() => {
      setMessage(false);
    }, 2500);
  };

  return (
    <ContactStyle>
      <div id="container">
        <div className="left-side">
          <form className="form" onSubmit={handleSubmit} ref={form}>
            <h3>Contate-me</h3>
            <input type="text" placeholder="Seu nome" name="name" required />
            <input type="text" placeholder="Seu E-mail" name="email" required />
            <textarea
              rows={10}
              placeholder="Escreva sua mensagem"
              name="message"
              required
            ></textarea>
            {success ? (
              <button className="btn" disabled>
                Enviar
              </button>
            ) : (
              <button className="btn">Enviar</button>
            )}
            {message ? (
              <p>Recebi sua mensagem, retornarei via E-mail em breve! 🌟</p>
            ) : (
              ""
            )}
          </form>
        </div>
        <div className="right-side">
          <Map />
        </div>
      </div>
    </ContactStyle>
  );
};

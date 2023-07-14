import React, { useState, useRef } from "react";
import { send } from "emailjs-com";
// import { useOutsideAlerter } from  '../../helpers'

const CONTACT_EMAIL = "service_kit3qim";
const EMAIL_TEMPLATE = "template_csh8frj";
const USER_EMAILJS = "jUVna39sZzS-FWJ8E";

type MessageProps = {
  from_name: string;
  to_name: string;
  message: string;
  reply_to: string;
  project_description?: string;
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
};

const ContactModal = () => {
  const [toSend, setToSend] = useState<MessageProps>({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const modal = useRef(null);

  const resetForm = () => {
    setToSend({
      from_name: "",
      to_name: "",
      message: "",
      reply_to: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(CONTACT_EMAIL, EMAIL_TEMPLATE, toSend, USER_EMAILJS)
      .then(() => {
        //TODO: add success feedback
      })
      .then(() => {
        resetForm();
        close();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // useOutsideAlerter(modal, handleModal.close)

  return (
    <div className="cm-modal cm-modal" ref={modal}>
      <form
        onSubmit={onSubmit}
        className="d-flex flex-column align-items-center"
      >
        <div
          className="cm-formgroup 
                                d-flex 
                                flex-column 
                                align-items-center 
                                justify-content-center
                                mb-4"
        >
          <input
            type="text"
            name="contact_name"
            value={toSend.contact_name}
            placeholder="Nome"
            onChange={handleChange}
            required
          />
          <label htmlFor="contact_name">Nome/Empresa</label>
        </div>
        <div
          className="cm-formgroup 
                                d-flex 
                                flex-column 
                                align-items-center 
                                justify-content-center
                                mb-4"
        >
          <input
            type="phone"
            name="contact_phone"
            value={toSend.contact_phone}
            placeholder="(xx) xxxxx.xxxx"
            onChange={handleChange}
          />
          <label htmlFor="contact_phone">Telefone</label>
        </div>
        <div
          className="cm-formgroup 
                                d-flex 
                                flex-column 
                                align-items-center 
                                justify-content-center
                                mb-4"
        >
          <input
            type="email"
            name="contact_email"
            value={toSend.contact_email}
            placeholder="seuemail@contato.com"
            onChange={handleChange}
            required
          />
          <label htmlFor="contact_email">e-mail</label>
        </div>
        <div
          className="cm-formgroup 
                                cm-formgroup__textarea
                                d-flex
                                flex-column
                                align-items-center
                                justify-content-center
                                mb-5"
        >
          <label htmlFor="project_description">Como eu posso te ajudar?</label>
          <textarea
            type="text"
            name="project_description"
            value={toSend.project_description}
            placeholder="conte um pouco sobre seu projeto"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn cm-btn cm-btn-contact">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactModal;

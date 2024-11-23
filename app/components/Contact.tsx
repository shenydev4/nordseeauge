'use client'

import { useState, useEffect } from 'react';
import '@/app/kontakt/contact.css'
import Cross from './icons/Cross';
import Letter from './icons/Letter';

export default function Contact({
  className
}:{
  className?: string
}) {

  const [formData, setFormData] = useState({
    company: '',
    surname: '',
    prename: '',
    email: '',
    phoneNo: '',
    object: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isDataPrivacyChecked, setIsDataPrivacyChecked] = useState(false);

  const validateForm = () => {
    const { surname, prename, email, phoneNo, message } = formData;

    const nameRegex = /^[a-zA-Z\u00C0-\u017F\-\s']+$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    const isNameValid = nameRegex.test(surname) && nameRegex.test(prename);
    const isEmailValid = emailRegex.test(email);

    const areRequiredFieldsFilled = surname && prename && email && message;
    
    const isObjectSelected = formData.object !== '';
    const isPhoneValid = !phoneNo || phoneRegex.test(phoneNo); 

    return (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      areRequiredFieldsFilled &&
      isDataPrivacyChecked &&
      isObjectSelected
    );
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Updated formData:", { ...formData, [name]: value }); 
  };
  
  useEffect(() => {
    setIsSubmitDisabled(!validateForm());
  }, [formData, isDataPrivacyChecked]);

  const handleDataPrivacyChange = (e:any) => {
    setIsDataPrivacyChecked(e.target.checked);
    setIsSubmitDisabled(!validateForm());
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [''], 
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: `NordseeAuge Kontakt-Formular Anfrage`,
            text: `Diesen Text sollte man nicht sehen können.`,
            html: `
            <html>
              <head>
                <style>
                  .message-content {
                    white-space: pre-line;
                  }
                </style>
              </head>
              <body>
                <h3>Dies ist eine automatisch generierte Email vom NordseeAuge Kontakt-Formular.</h3>
                <p>
                  <b>Unternehmen:</b> ${formData.company ? (formData.company):'<i>(nicht angegeben)</i>'}
                </p>
                <p>
                  <b>Nachname:</b> ${formData.surname}
                </p>
                <p>
                  <b>Vorname:</b> ${formData.prename}
                </p>
                <p>
                  <b>Email:</b> ${formData.email}
                </p>
                <p>
                  <b>Telefonnummer: </b> ${formData.phoneNo ? (formData.phoneNo):'<i>(nicht angegeben)</i>'}
                </p>
                <p>
                  <b>Objekt: </b> ${formData.object}
                </p>
                <p class="message-content">
                  <b>Nachricht:</b><br/> ${formData.message}
                </p>
              </body>
            </html>`,
          },
        }),
      });
      const result = await response.json();
      setErrorMessage(result.message)
      setIsOpenModal(true)

    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className={`${className} flex xl:flex-row flex-col xl:gap-32 gap-12 xl:items-center`}>

      <div className='basis-1/2'>
        <h3 className='mb-6 flex md:items-center gap-4 md:flex-row flex-col'>
          <span className='block md:h-8 h-6 md:w-8 w-6 mt-1 duration-300 text-black'>
            <Letter />
          </span>
          Hinterlassen Sie uns eine Nachricht
        </h3>
        <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae sint quas blanditiis neque quia commodi, aliquid vero possimus.</p>
        <p>
          Alternativ können Sie uns auch direkt eine Email an <a href='mailto:info@nordseeauge.de' className='link-intext'>info@nordseeauge.de</a> schreiben.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='basis-1/2 flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="company">Unternehmen</label>
          <input
            type="text"
            placeholder=""
            name='company'
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex gap-4 md:flex-row flex-col'>
          <div className='flex flex-col gap-1 md:basis-1/2'>
            <label htmlFor="surname">Nachname*</label>
            <input
              type="text"
              placeholder=""
              name='surname'
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1 md:basis-1/2'>
            <label htmlFor="prename">Vorname*</label>
            <input
              type="text"
              placeholder=""
              name='prename'
              value={formData.prename}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className='flex gap-4 md:flex-row flex-col'>
          <div className='flex flex-col gap-1 basis-1/2'>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              placeholder=""
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1 basis-1/2'>
            <label htmlFor="phoneNo">Telefon &#40;bei Rückruf Wunsch&#41;</label>
            <input
              type="tel"
              placeholder=""
              name='phoneNo'
              value={formData.phoneNo}
              onChange={handleInputChange}
            />
          </div>

        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="object">Was möchten Sie anfragen/buchen*</label>
          <select 
            name="object"
            id="object"
            value={formData.object}
            onChange={handleInputChange}
          >
            <option value='- bitte auswählen -' hidden>- bitte auswählen -</option>
            <option value='Imagefilm, Video, Foto, Drohne'>Imagefilm, Video, Foto, Drohne</option>
            <option value='privates Fotoshooting'>privates Fotoshooting</option>
            <option value='Eventbegleitung'>Eventbegleitung</option>
            <option value='Kooperation'>Kooperation</option>
            <option value='gemeinnütziges Netzwerk'>gemeinnütziges Netzwerk</option>
            <option value='sonstiges'>sonstiges</option>
          </select>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="message">Anfrage*</label>
          <textarea
            placeholder=""
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex gap-2">
          <input
            className='w-5 h-5 mt-1 cursor-pointer hover:shadow-none'
            type="checkbox"
            id="dataPrivacy"
            checked={isDataPrivacyChecked}
            onChange={handleDataPrivacyChange}
          />
          <label htmlFor="dataPrivacy" className='!text-[18px]'>
            Ich stimme der Verarbeitung meiner Daten gemäß der <a href="" className='link-intext !text-[18px]'>Datenschutzerklärung</a> zu.*
          </label>
        </div>

        <p className="caption !text-[16px]">* Pflichtfelder</p>

        <button type="submit" disabled={isSubmitDisabled} className={`${isSubmitDisabled && '!bg-gray-300 hover:!bg-gray-300'}`}> 
          Anfrage senden
        </button>
      </form>

      {isOpenModal && (
        <div className='fixed z-50 top-1/2 left-1/2 flex flex-col gap-6 py-8 px-14 bg-yellow-200 w-fit max-w-[800px] -translate-y-1/2 -translate-x-1/2 rounded shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex justify-between items-center'>
            <p className='caption'>Formularübermittlung</p>
            <span 
              onClick={() => setIsOpenModal(false)}
              className='block w-8 h-8 text-[#4b5563] duration-300 hover:scale-[1.15] hover:cursor-pointer hover:text-black'
            >
              <Cross />
            </span>
          </div>
          <p className='max-w-[800px]'>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}